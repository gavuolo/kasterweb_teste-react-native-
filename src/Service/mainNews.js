import api from './api';

export async function getMainNews() {
  const response = await api.get(
    '/top-headlines?country=us&apiKey=953553fac04f4d6ea62d11a7db592bfa',
  );
  return response.data;
}
