import {AfterViewInit, ChangeDetectionStrategy, Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  writableSignal: WritableSignal<string> = signal('signal title');
  computedSignal: Signal<string> = computed(() => {
    console.log('recomputed')
    return 'i am computed ' + this.writableSignal()
  });
  title = 'fsdfsdf';

  state = {
    people: [
      {id: 1, name: 'jhon1'},
      {id: 2, name: 'jhon2'},
      {id: 3, name: 'jhon3'},
      {id: 4, name: 'jhon4'},
    ]
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  render() {
  }
}
