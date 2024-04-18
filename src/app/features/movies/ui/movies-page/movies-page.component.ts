import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, effect, inject, OnInit} from '@angular/core';
import {MoviesState} from '@features/movies/state/movie.model';
import {ComponentStore} from '@ngrx/component-store';

@Component({
  selector: 'movies-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentStore],
})
export class MoviesPageComponent implements OnInit {
  readonly componentStore = inject(ComponentStore<MoviesState>)
  readonly movies$ = this.componentStore.select(state => state.movies);

  constructor() {
    effect(() => {
      console.log(this.componentStore.state());
    });
  }

  ngOnInit() {
    //lazy store initialization
    this.componentStore.setState({movies: [
        {id: '1', name: '1'},
        {id: '2', name: '2'},
        {id: '3', name: '3'},
        {id: '4', name: '4'},
      ]});
  }

  stateReset(): void {
    this.componentStore.setState(state => ({
      movies: []
    }))
  }

  selectMovie(movieId: string): void {
    this.componentStore.patchState(state => ({
      selectedMovieId: movieId,
    }))
  }

  stateCheck(): void {

  }
}
