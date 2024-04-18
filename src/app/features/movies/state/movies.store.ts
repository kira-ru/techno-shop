import {computed, Injectable} from '@angular/core';
import {Movie, MoviesState} from '@features/movies/state/movie.model';
import {ComponentStore} from '@ngrx/component-store';

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  //selectors
  movies$ = this.select(state => state.movies);
  preferredMoviesIds$ = this.select(state => state.preferredIds);
  preferredMovies$ = this.select(
    this.movies$,
    this.preferredMoviesIds$,
    (movies, preferredIds) => movies.filter(m => preferredIds?.includes(m.id))
  );
  viewModel$ = this.select({
    movies: this.movies$,
    preferredMoviesIds$: this.preferredMoviesIds$,
    preferredMovies$: this.preferredMovies$
  })

  //with signals
  sMovies$ = this.selectSignal(state => state.movies)
  sPreferredIds = this.selectSignal(state => state.preferredIds);
  sPreferredMovies$ = this.selectSignal(
    this.sMovies$,
    this.sPreferredIds,
    (movies, preferredIds) => movies.filter(m => preferredIds?.includes(m.id))
  );

  //state signal (signal to provide all entire state)
  ssMovies$ = computed(() => this.state().movies);

  constructor() {
    //init
    super({movies: []});
  }

  // state update immutable function
  readonly addMovie = this.updater((state, movie: Movie) => ({
    movies: [...state.movies, movie],
    preferredIds: state.preferredIds ? [...state.preferredIds] : [],
  }))

  //effect
  // getMovies = this.effect((movieId$: Observable<string>) => {
  //   return movieId$.pipe(
  //     switchMap(movieId => this.moviesService.fetchMovie(movieId).pipe(
  //       tap({
  //         next: (movie) => this.addMovie(movie),
  //         error: (e) => this.logError(e),
  //       })
  //     ))
  //   )
  // })
}
