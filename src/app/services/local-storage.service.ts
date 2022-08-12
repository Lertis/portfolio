import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'

@Injectable()
export class LocalStorageService {

  private get localStorage (): Storage {
    return this.document.defaultView.localStorage
  }

  constructor (@Inject(DOCUMENT) private readonly document: Document) { }

  getItem(key: string): string {
    return this.localStorage.getItem(key)
  }

  setItem (key: string, value: string): void {
    this.localStorage.setItem(key, value)
  }

  removeItem (key: string): void {
    this.localStorage.removeItem(key)
  }
}
