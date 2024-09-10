import { createRouter, createWebHistory } from 'vue-router';
import BreweryDetailPage from '@/brewery/BreweryDetailPage.vue';
import BreweryListPage from '@/brewery/BreweryListPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'BreweryDetailPage',
      component: BreweryDetailPage,
    },
    {
      path: '/',
      name: 'BreweryListPage',
      component: BreweryListPage,
    },
  ],
});

export default router;
