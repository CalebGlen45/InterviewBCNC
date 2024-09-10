<script setup lang="ts">
import router from '@/router';

function goToHome() {
  router.push({ name: 'BreweryListPage' });
}
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <template v-slot:prepend>
        <div @click="goToHome">
          <v-img src="./assets/beer.png" class="ml-2" width="50" height="50" />
        </div>
      </template>
      <v-app-bar-title>
        <p> Brewhaus </p>
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn variant="text" @click="goToHome">
          Home
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>