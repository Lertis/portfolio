import { HttpClient } from '@angular/common/http'
import { Injector } from '@angular/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { Language } from '../model'

import { LanguageTranslationsFacadeService, LocalStorageService } from '../services'
import { DEFAULT_LANGUAGE_TOKEN, LANGUAGE_STORAGE_KEY } from '../tokens'

export function initLangugages (
  translationsService: LanguageTranslationsFacadeService,
  localStorageService: LocalStorageService,
  injector: Injector
): () => void {
  return () => {
    const defaultLanguage = injector.get<Language>(DEFAULT_LANGUAGE_TOKEN)
    const languageStorageKey = injector.get<string>(LANGUAGE_STORAGE_KEY)
    const lang = localStorageService.getItem(languageStorageKey) as Language
    if (lang) {
      translationsService.changeUseLanguage(lang)
    } else {
      translationsService.setDefaultLanguage()
      localStorageService.setItem(languageStorageKey, defaultLanguage)
    }
  }
}

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http)
}
