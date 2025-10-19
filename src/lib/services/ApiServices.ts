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

// Search movies
export const searchMovies = async (query: string) => {
  const res = await api.get("/search/movie", {
    params: { query },
  });
  return res.data.results;
};

// Fetch movie details
export const getMovieDetails = async (
  id: string | number
): Promise<MovieDetailsResponse> => {
  const res = await api.get(`/movie/${id}`);
  if (!res) throw new Error("Failed to get movie details");
  return res.data;
};

//Get movie credits
export const getMovieCredits = async (
  id: string | number
): Promise<MovieCreditsResponse> => {
  const res = await api.get(`/movie/${id}/credits`);
  if (!res) throw new Error("Failed to get movie credits");
  return res.data;
};

//Get movie trailers
export const getMovieVideos = async (
  id: string | number
): Promise<MovieVideosResponse> => {
  const res = await api.get(`/movie/${id}/videos`);
  if (!res) throw new Error("Failed to get movie videos");
  return res.data;
};

// Get movie recommendations
export const getMovieRecommendations = async (
  id: string | number
): Promise<MovieRecommendationResponse> => {
  const res = await api.get(`/movie/${id}/recommendations`);
  if (!res) throw new Error("Failed to get movie recommendations");
  return res.data;
};

//Get all movies using category
export const fetchMovies = async (
  endpoint: string,
  page: number = 1
): Promise<Movie[]> => {
  const res = await api.get(`/movie/${endpoint}`, {
    params: { page },
  });
  if (!res) throw new Error(`Failed to get ${endpoint} data`);
  return res.data.results;
};

//Get all genres
export const fetchGenres = async () => {
  const res = await api.get(`/genre/movie/list?`);
  if (!res) {
    throw new Error("Failed to fetch genres");
  }
  return res.data.genres;
};

export default api;
