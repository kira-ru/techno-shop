import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NgOptimizedImage} from "@angular/common";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {MenuItem} from "@pages/layouts/main-menu-layout/model";
import {NzFlexDirective} from "ng-zorro-antd/flex";

@Component({
  selector: 'main-menu-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzIconModule,
    RouterOutlet,
    NgOptimizedImage,
    NzMenuModule,
    NzFlexDirective,
  ],
  templateUrl: './main-menu-layout.component.html',
  styleUrl: './main-menu-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuLayoutComponent {
  public readonly MainMenuItems: MenuItem[] = [
    { title: 'Smartphone' },
    { title: 'TV' },
    { title: 'Laptop' },
    { title: 'Accessorise' },
  ]

  public readonly ProfileMenuItems: RequiredFields<MenuItem, 'image'>[] = [
    { image: 'search' },
    { image: 'shopping-cart' },
    { image: 'user' },
  ]
}
