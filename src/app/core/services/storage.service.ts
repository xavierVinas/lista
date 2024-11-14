import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public setInLocalStorage(key: string, object: string): void {
    localStorage.setItem(key, object);
  }

  // crear el get y crear el delete

  //crear los mismos metodos para el session storage ( mirar la diferencia )
}
