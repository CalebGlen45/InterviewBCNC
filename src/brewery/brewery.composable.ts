import type { Pageable } from '@/models/pageable.model';
import axios from 'axios';

export function useBrewery() {
  return {
    findAllBreweries,
    findBreweryById,
    loadMeta,
  };
}

async function findAllBreweries(pageable: Pageable, keywords: string) {
  let url = `https://api.openbrewerydb.org/v1/breweries?page=${pageable.page}&per_page=${pageable.per_page}`;
   if (keywords) {
     url += `&by_name=${keywords}`;
   }

  const response = await axios.get(url);
  return response.data;
}

async function loadMeta() {
  const response = await axios.get('https://api.openbrewerydb.org/v1/breweries/meta');
  return response.data;
}

async function findBreweryById(id: string) {
  const response = await axios.get(`https://api.openbrewerydb.org/v1/breweries/${id}`);
  return response.data;
}