export interface MovieCardProps {
  title: string;
  posterPath: string;
}
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}
export interface HeroProps {
  backdropPath: string;
  title: string;
  overview: string;
}
export interface MovieSectionProps {
  title: string;
  movies: Movie[];
}
