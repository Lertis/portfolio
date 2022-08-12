import { InjectionToken } from '@angular/core'
import { Language } from '../model/languages'

export const DEFAULT_LANGUAGE_TOKEN = new InjectionToken<Language>('DEFAULT_LANGUAGE_TOKEN')

export const LANGUAGE_STORAGE_KEY = new InjectionToken<string>('LANGUAGE_STORAGE_KEY')
