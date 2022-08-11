import { LanguageTranslationsFacadeService } from '../services'

export function initLangugages (translationsService: LanguageTranslationsFacadeService): () => void {
  return () => translationsService.setDefaultLanguage()
}
