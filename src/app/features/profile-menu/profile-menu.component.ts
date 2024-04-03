import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";

@Component({
  selector: 'profile-menu',
  standalone: true,
    imports: [
        NzButtonComponent,
        NzFlexDirective,
        NzWaveDirective
    ],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMenuComponent {
  @ViewChild('userTitle')
  public userTitleTemplate!: TemplateRef<void>;

  @ViewChild('userContent')
  public userContentTemplate!: TemplateRef<void>;

  public loggedIn = false;
}
