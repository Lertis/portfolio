import { Inject, Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import { Language } from '../model'
import { DEFAULT_LANGUAGE_TOKEN } from '../tokens'

@Injectable()
export class LanguageTranslationsFacadeService {

  get defaultLanguageId (): Language {
    return this.defaultLanguage
  }

  constructor (
    @Inject(DEFAULT_LANGUAGE_TOKEN) private readonly defaultLanguage: Language,
    private readonly translateService: TranslateService) { }

  setDefaultLanguage = (): void => {
    this.translateService.setDefaultLang(this.defaultLanguageId)
    this.translateService.use(this.defaultLanguageId)
  }

  changeUseLanguage = (language: Language): void => {
    this.translateService.setDefaultLang(language)
    this.translateService.use(language)
  }
}
