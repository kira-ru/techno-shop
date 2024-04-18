import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MoviesPageComponent} from '@features/movies/ui/movies-page/movies-page.component';

@Component({
  selector: 'smartphones',
  standalone: true,
  imports: [
    MoviesPageComponent
  ],
  templateUrl: './smartphones.component.html',
  styleUrl: './smartphones.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartphonesComponent {

}
