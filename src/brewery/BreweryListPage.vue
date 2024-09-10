<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { BreweryModel } from '@/models/brewery_model';
import type { Pageable } from '@/models/pageable.model';
import { useBrewery } from '@/brewery/brewery.composable';
import router from '@/router';

const { findAllBreweries, loadMeta } = useBrewery();

const breweries = ref<BreweryModel[]>([]);
const pageable = ref<Pageable>({ page: 1, per_page: 20, total: 0 });
const keywords = ref();

async function loadPageable() {
  try {
    const meta = await loadMeta();
    pageable.value.page = Number(meta.page);
    pageable.value.per_page = Number(meta.per_page);
    pageable.value.total = Number(meta.total);
  } catch (error) {
    console.log(error);
  }
}

async function loadBreweries() {
  try {
    pageable.value.page = 1;
    breweries.value = await findAllBreweries(pageable.value, keywords.value);
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreBreweries({ done }: { done: (value: 'ok' | 'empty' | 'error') => void }) {
  if (!keywords.value) {
    if (breweries.value.length >= pageable.value.total) {
      done('empty');
      return;
    }

    try {
      pageable.value.page += 1;
      const moreBreweries = await findAllBreweries(pageable.value, keywords.value);
      breweries.value.push(...moreBreweries);
    } catch (error) {
      console.log(error);
    }
  }
  done('error');
}

async function loadListPage() {-
  await loadPageable();
  await loadBreweries();
}

function goToBreweryDetailPage(breweryId: string) {
  router.push({ name: 'BreweryDetailPage', params: { id: breweryId } });
}

onMounted(loadListPage);
watch(keywords, loadBreweries);
</script>

<template>
  <v-text-field
    label="Search"
    variant="underlined"
    v-model="keywords"
  />

  <v-infinite-scroll
    v-if="breweries.length"
    :items="breweries"
    class="infinite-scroll"
    empty-text=""
    @load="loadMoreBreweries"
  >
    <div class="pb-1 d-flex flex-wrap">
      <v-list>
        <v-list-item v-for="brewery in breweries" :key="brewery.id" @click="goToBreweryDetailPage(brewery.id)">
          <v-card>
            <v-card-text>
              <div class="d-flex">
                <p> {{ brewery.name }} </p>
                <p> {{ brewery.brewery_type }}</p>
              </div>
              <div class="d-flex">
                <p class="mr-1"> {{ brewery.address_1 }}, </p>
                <p class="mr-1"> {{ brewery.city }}, </p>
                <p> {{ brewery.state }} </p>
              </div>
            </v-card-text>
          </v-card>
        </v-list-item>
      </v-list>
    </div>
  </v-infinite-scroll>

</template>

<style scoped>
.infinite-scroll {
  overflow: hidden;
}
</style>