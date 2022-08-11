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
  readonly languages: { languageName: string, id: Language, icon: string, checked: boolean }[] = [
    { languageName: 'languages.en', id: Language.ENGLISH, icon: '', checked: true },
    { languageName: 'languages.de', id: Language.DEUTSCHLAND, icon: '', checked: false },
    { languageName: 'languages.ua', id: Language.UKRAINIAN, icon: '', checked: false }
  ]

  constructor (private readonly languageTranslationsService: LanguageTranslationsFacadeService) { }

  readonly changeLang = (id: Language): void => this.languageTranslationsService.changeUseLanguage(id)
}
