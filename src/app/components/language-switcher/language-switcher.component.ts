import { ChangeDetectionStrategy, Component } from '@angular/core'

import { Language } from '../../model'
import { LanguageTranslationsFacadeService } from '../../services'

@Component({
  selector: 'portfolio-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioLanguageSwitcherComponent {
  private readonly baseIconPath = '../../../assets/backgrounds'
  readonly languages: { languageName: string, id: Language, icon: string, checked: boolean }[] = [
    { languageName: 'languages.en', id: Language.ENGLISH, icon: `${this.baseIconPath}/united-kingdom-flag.svg`, checked: true },
    { languageName: 'languages.ua', id: Language.UKRAINIAN, icon: `${this.baseIconPath}/ukraine-flag.svg`, checked: false },
    { languageName: 'languages.pl', id: Language.POLISH, icon: `${this.baseIconPath}/poland-flag.svg`, checked: false },
    { languageName: 'languages.sp', id: Language.SPANISH, icon: `${this.baseIconPath}/spain-flag.svg`, checked: false },
    { languageName: 'languages.fr', id: Language.FRENCH, icon: `${this.baseIconPath}/france-flag.svg`, checked: false },
    { languageName: 'languages.de', id: Language.DEUTSCHLAND, icon: `${this.baseIconPath}/germany-flag.svg`, checked: false },
  ]

  constructor (private readonly languageTranslationsService: LanguageTranslationsFacadeService) { }

  readonly changeLang = (id: Language): void => this.languageTranslationsService.changeUseLanguage(id)
}
