import { ApplicationConfig } from '@angular/core';
import {provideRouter, TitleStrategy} from '@angular/router';
import {routes} from '@app/config/app.routes';
import {TemplatePageTitleStrategy} from '@shared/services/page-title-strategy/page-title-strategy.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};
