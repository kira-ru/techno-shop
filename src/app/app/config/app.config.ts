import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, TitleStrategy} from '@angular/router';
import {routes} from '@app/config/app.routes';
import {TemplatePageTitleStrategy} from '@shared/services/page-title-strategy/page-title-strategy.service';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ],
};
