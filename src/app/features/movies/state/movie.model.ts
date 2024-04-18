export interface Movie {
  id: string,
  name: string,
}

export interface MoviesState {
  movies: Movie[];
  preferredIds?: string[],
  selectedMovieId?: string,
}
