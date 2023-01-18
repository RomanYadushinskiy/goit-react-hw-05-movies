import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '217a4cbe2f726447c9a39cfed7ff9ffe';

export const trendingMovie = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const searchMovie = async query => {
  const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  return data.results;
};

export const detailsMovie = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return data;
};

export const creditsMovie = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return data;
};

export const reviewsMovie = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return data.results;
};

