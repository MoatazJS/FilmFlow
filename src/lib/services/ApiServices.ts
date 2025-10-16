import axios from "axios";
import {
  MovieDetailsResponse,
  MovieCreditsResponse,
  MovieVideosResponse,
  MovieRecommendationResponse,
  Movie,
} from "../interfaces/interface";

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

// Search movies
export const searchMovies = async (query: string) => {
  const res = await api.get("/search/movie", {
    params: { query },
  });
  return res.data.results;
};
// Fetch movie details by ID
export const getMovieDetails = async (
  id: string | number
): Promise<MovieDetailsResponse> => {
  const res = await api.get(
    `/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res) {
    throw new Error("Failed to get movie details");
  }
  return res.data;
};

// Get movie credits by ID
export const getMovieCredits = async (
  id: string | number
): Promise<MovieCreditsResponse> => {
  const res = await api.get(
    `/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res) {
    throw new Error("Failed to get movie credits");
  }
  return res.data;
};
// Get movie trailers by ID
export const getMovieVideos = async (
  id: string | number
): Promise<MovieVideosResponse> => {
  const res = await api.get(
    `/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res) {
    throw new Error("Failed to get movie credits");
  }
  return res.data;
};
// Get movie recommendations by ID
export const getMovieRecommendations = async (
  id: string | number
): Promise<MovieRecommendationResponse> => {
  const res = await api.get(
    `/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  if (!res) {
    throw new Error("Failed to get movie recommendations");
  }
  return res.data;
};
// Get all movies using category.
export const fetchMovies = async (
  endpoint: string,
  page: number = 1
): Promise<Movie[]> => {
  const res = await api.get(`/movie/${endpoint}`, {
    params: { page },
  });
  if (!res) {
    console.log("TMDB key:", process.env.NEXT_PUBLIC_TMDB_API_KEY);
    throw new Error(`Failed to get ${endpoint} data`);
  }
  console.log("TMDB key:", process.env.NEXT_PUBLIC_TMDB_API_KEY);
  return res.data.results;
};
export default api;
