import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { FancyButtonComponent, MeetUpBlockComponent, PortfolioLanguageSwitcherComponent } from './components'

import { LanguageTranslationsFacadeService } from './services'

import { HttpLoaderFactory, initLangugages } from './utils'

import { DEFAULT_LANGUAGE_TOKEN } from './tokens'

import { Language } from './model'

const COMPONENTS = [
  FancyButtonComponent,
  MeetUpBlockComponent,
  PortfolioLanguageSwitcherComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LanguageTranslationsFacadeService,
    {
      provide: APP_INITIALIZER,
      useFactory: initLangugages,
      deps: [LanguageTranslationsFacadeService, TranslateService],
      multi: true
    },
    {
      provide: DEFAULT_LANGUAGE_TOKEN,
      useValue: Language.ENGLISH
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
