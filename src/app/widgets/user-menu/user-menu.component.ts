import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MenuItem} from "@pages/layouts/main-menu-layout/model";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {NzPopoverDirective} from "ng-zorro-antd/popover";
import {ProfileMenuComponent} from "@features/profile-menu/profile-menu.component";

@Component({
  selector: 'user-menu',
  standalone: true,
  imports: [
    NzIconDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzButtonComponent,
    NzFlexDirective,
    NzWaveDirective,
    NzPopoverDirective,
    ProfileMenuComponent
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent {
  @ViewChild(ProfileMenuComponent)
  public profileMenu!: ProfileMenuComponent;

  public loggedIn = false;

  public readonly ProfileMenuItems: RequiredFields<MenuItem, 'image'>[] = [
    { image: 'search' },
    { image: 'shopping-cart' },
    { image: 'user' },
  ]

  public popOverVisible = false;
}
