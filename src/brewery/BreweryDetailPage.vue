<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { BreweryModel } from '@/models/brewery_model';
import { useBrewery } from '@/brewery/brewery.composable';
import { useRoute } from 'vue-router';

const { findBreweryById } = useBrewery();

const brewery = ref<BreweryModel>();
const route = useRoute();

async function loadBrewery() {
  try {
    brewery.value = await findBreweryById(route.params.id as string);
  } catch (error) {
    console.log(error);
  }
}

onMounted(loadBrewery);
</script>

<template>
  <v-card>
    <v-card-title>
      <div>
        Brewery Name: {{ brewery?.name }}
      </div>
      <div>
        Brewery Type: {{ brewery?.brewery_type }}
      </div>
    </v-card-title>
    <v-card-text>
      <div class="d-flex">
        <p class="mr-2"> Address: </p>
        <p class="text-black mr-1"> {{ brewery?.address_1 }}, </p>
        <p class="mr-1"> {{ brewery?.city }}, </p>
        <p class="mr-1"> {{ brewery?.state }} </p>
        <p> {{ brewery?.country }}</p>
      </div>
      <div v-if="brewery?.longitude" class="d-flex">
        <p class="mr-2"> Longitude: </p>
        <p class="text-black mr-1"> {{ brewery.longitude }}, </p>
      </div>
      <div v-if="brewery?.latitude" class="d-flex">
        <p class="mr-2"> Latitude: </p>
        <p class="text-black mr-1"> {{ brewery.latitude }}, </p>
      </div>
      <div v-if="brewery?.phone" class="d-flex">
        <p class="mr-2"> Phone Number: </p>
        <p class="text-black mr-1"> {{ brewery.phone }} </p>
      </div>
      <div v-if="brewery?.website_url" class="d-flex">
        <p class="mr-2"> Website: </p>
        <p class="text-black mr-1"> {{ brewery.website_url }} </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>