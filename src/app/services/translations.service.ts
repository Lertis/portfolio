import { Inject, Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import { Language } from '../model'
import { DEFAULT_LANGUAGE_TOKEN } from '../tokens'

@Injectable()
export class LanguageTranslationsFacadeService {

  constructor (@Inject(DEFAULT_LANGUAGE_TOKEN) private readonly defaultLanguage: Language,
    private readonly translateService: TranslateService) { }

  setDefaultLanguage = (): void => {
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
  }

  changeUseLanguage = (language: Language): void => {
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }
}
