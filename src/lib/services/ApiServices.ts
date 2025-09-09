import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "en-US",
  },
});

// Fetch popular movies
export const getPopularMovies = async () => {
  const res = await api.get("/movie/popular");
  return res.data.results;
};

// Fetch movie details by ID
export const getMovieDetails = async (id: string | number) => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};

// Search movies
export const searchMovies = async (query: string) => {
  const res = await api.get("/search/movie", {
    params: { query },
  });
  return res.data.results;
};

export default api;
