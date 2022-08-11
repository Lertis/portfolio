import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { LanguageTranslationsFacadeService } from '../services'

export function initLangugages (translationsService: LanguageTranslationsFacadeService): () => void {
  return () => translationsService.setDefaultLanguage()
}

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http)
}
