import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'smartphones',
  standalone: true,
  imports: [],
  templateUrl: './smartphones.component.html',
  styleUrl: './smartphones.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartphonesComponent {

}
