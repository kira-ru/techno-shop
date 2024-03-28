import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';

@Component({
  selector: 'main-menu-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    RouterOutlet,
    NzButtonComponent,
    NzFlexDirective
  ],
  templateUrl: './main-menu-layout.component.html',
  styleUrl: './main-menu-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuLayoutComponent {

}
