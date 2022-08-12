import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'

import { LanguageTranslationsFacadeService, LocalStorageService } from '../../services'

import { Language } from '../../model'

import { LANGUAGE_STORAGE_KEY } from '../../tokens'

@Component({
  selector: 'portfolio-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioLanguageSwitcherComponent {
  private readonly baseIconPath = '../../../assets/backgrounds'

  readonly languages: { languageName: string, id: Language, icon: string, checked: boolean }[] = [
    { languageName: 'languages.en', id: Language.ENGLISH, icon: `${this.baseIconPath}/united-kingdom-flag.svg`, checked: false },
    { languageName: 'languages.ua', id: Language.UKRAINIAN, icon: `${this.baseIconPath}/ukraine-flag.svg`, checked: false },
    { languageName: 'languages.pl', id: Language.POLISH, icon: `${this.baseIconPath}/poland-flag.svg`, checked: false },
    { languageName: 'languages.sp', id: Language.SPANISH, icon: `${this.baseIconPath}/spain-flag.svg`, checked: false },
    { languageName: 'languages.fr', id: Language.FRENCH, icon: `${this.baseIconPath}/france-flag.svg`, checked: false },
    { languageName: 'languages.de', id: Language.DEUTSCHLAND, icon: `${this.baseIconPath}/germany-flag.svg`, checked: false },
  ]

  constructor (
    @Inject(LANGUAGE_STORAGE_KEY) private readonly languageStorageKey: string,
    private readonly localStorageService: LocalStorageService,
    private readonly languageTranslationsService: LanguageTranslationsFacadeService
    ) {
      this.checkedDefaultOfBerofeSelectedLanguage()
    }

  readonly changeLang = (id: Language): void => {
    this.languageTranslationsService.changeUseLanguage(id)
    this.localStorageService.setItem(this.languageStorageKey, id)
  }

  private readonly checkedDefaultOfBerofeSelectedLanguage = () => {
    const lang = this.localStorageService.getItem(this.languageStorageKey) as Language
    this.languages.forEach(language => language.checked = language.id === lang)
  }
}
