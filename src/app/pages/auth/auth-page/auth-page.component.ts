import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPageComponent {

}
