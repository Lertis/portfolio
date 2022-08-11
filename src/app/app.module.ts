import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { FancyButtonComponent, MeetUpBlockComponent } from './components'

import { LanguageTranslationsFacadeService } from './services'

import { initLangugages } from './utils'

const COMPONENTS = [
  FancyButtonComponent,
  MeetUpBlockComponent
]

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http)
}

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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
