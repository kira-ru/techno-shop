import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

}
