import { InjectionToken } from '@angular/core'
import { Language } from '../model/languages'

export const DEFAULT_LANGUAGE = new InjectionToken<Language>('DEFAULT_LANGUAGE')
