import axios from 'axios';

export async function fetchGallery(query,  page = 1) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=43218628-434600724cd02d3e35d2dc910';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;
 
  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
  console.log(url);
}