import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NgOptimizedImage} from "@angular/common";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {MenuItem} from "@pages/layouts/main-menu-layout/model";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {AppRoutes} from "@app/config/routes.constant";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzButtonModule} from "ng-zorro-antd/button";
import {UserMenuComponent} from "@widgets/user-menu/user-menu.component";

@Component({
  selector: 'main-menu-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzButtonModule,
    NzHeaderComponent,
    NzContentComponent,
    NzIconModule,
    RouterOutlet,
    NgOptimizedImage,
    NzMenuModule,
    NzFlexDirective,
    NzPopoverModule,
    RouterLink,
    UserMenuComponent,
  ],
  templateUrl: './main-menu-layout.component.html',
  styleUrl: './main-menu-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuLayoutComponent {
  public readonly MainMenuItems: RequiredFields<MenuItem, 'route'>[] = [
    {
      title: 'Smartphone',
      route: [AppRoutes.SMARTPHONES]
    },
    {
      title: 'TV',
      route: [AppRoutes.TV]
    },
    {
      title: 'Laptop',
      route: [AppRoutes.LAPTOPS]
    },
    {
      title: 'Accessorise',
      route: [AppRoutes.ACCESSORISE]
    },
  ]
}
