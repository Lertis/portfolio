import { InjectionToken } from '@angular/core'
import { Language } from '../model/languages'

export const DEFAULT_LANGUAGE_TOKEN = new InjectionToken<Language>('DEFAULT_LANGUAGE_TOKEN')
