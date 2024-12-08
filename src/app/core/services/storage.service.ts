import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  /**
   *
   * @param key Key for reference in stogage
   * @param object Object to save
   */
  public setInLocalStorage(key: string, object: unknown): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  /**
   *
   * @param key Key for reference in stogage
   * @param object Object to save
   */
  public getInLocalStorage<T>(key: string): T | null {
    return (JSON.parse(localStorage.getItem(key)!) as T) ?? null;
  }

  /**
   *
   * @param key key for remove from local storage
   */
  public removeItemFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
