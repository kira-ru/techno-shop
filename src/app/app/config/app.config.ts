import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, TitleStrategy} from '@angular/router';
import {routes} from '@app/config/app.routes';
import {TemplatePageTitleStrategy} from '@shared/services/page-title-strategy/page-title-strategy.service';
import {HttpClientModule} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ],
};
