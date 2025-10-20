"use server";

export async function FetchMovieOfTheDay() {
  const Api = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const pages = 10;
  const endpoints = ["popular", "top_rated"];
  const requests: Promise<Response>[] = [];

  for (const endpoint of endpoints) {
    for (let i = 1; i <= pages; i++) {
      const response = fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${Api}&language=en-US&page=${i}`,
        {
          next: {
            revalidate: 86400,
          },
        }
      );
      requests.push(response);
    }
  }
  const responses = await Promise.all(requests);
  const allMoviesArrays = await Promise.all(responses.map((r) => r.json()));
  const allMovies = allMoviesArrays.flatMap((data) => data.results || []);
  const randomMovie = allMovies[Math.floor(Math.random() * allMovies.length)];
  return randomMovie;
}
