import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Language } from '../model'

@Injectable()
export class LanguageTranslationsFacadeService {
  constructor (private readonly translateService: TranslateService) { }

  setDefaultLanguage = (): void => {
    this.translateService.setDefaultLang(Language.ENGLISH);
    this.translateService.use(Language.ENGLISH);
  }

  changeUseLanguage = (language: Language): void => {
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }
}
