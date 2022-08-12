import { APP_INITIALIZER, Injector, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { FancyButtonComponent, MeetUpBlockComponent, PortfolioLanguageSwitcherComponent, TechBlockComponent, TechInfoBlockComponent } from './components'

import { LanguageTranslationsFacadeService, LocalStorageService } from './services'

import { HttpLoaderFactory, initLangugages } from './utils'

import { DEFAULT_LANGUAGE_TOKEN, LANGUAGE_STORAGE_KEY } from './tokens'

import { LANGUAGE_STORAGE_KEY_VALUE } from './constants'

import { Language } from './model'

const COMPONENTS = [
  FancyButtonComponent,
  MeetUpBlockComponent,
  PortfolioLanguageSwitcherComponent,
  TechBlockComponent,
  TechInfoBlockComponent
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
    LocalStorageService,
    {
      provide: APP_INITIALIZER,
      useFactory: initLangugages,
      deps: [LanguageTranslationsFacadeService, LocalStorageService, Injector, TranslateService],
      multi: true
    },
    {
      provide: DEFAULT_LANGUAGE_TOKEN,
      useValue: Language.ENGLISH
    },
    {
      provide: LANGUAGE_STORAGE_KEY,
      useValue: LANGUAGE_STORAGE_KEY_VALUE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
