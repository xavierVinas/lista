import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/lists/lists.models';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private readonly baseUrl = 'http://49.13.20.148:3010/api';
  // private baseUrl = 'http://localhost:3010/api';
  constructor(private _http: HttpClient) {}

  public getLists(): Observable<List[]> {
    return this._http.get<List[]>(`${this.baseUrl}/v1/lists`);
  }

  public createList(name: string): Observable<void> {
    return this._http.post<void>(`${this.baseUrl}/v1/lists`, { name });
  }

  public updateList(id: number, name: string): Observable<void> {
    return this._http.put<void>(`${this.baseUrl}/v1/lists`, { id, name });
  }
  public deleteLists(id: number): Observable<void> {
    return this._http.delete<void>(`${this.baseUrl}/v1/lists/${id}`);
  }
}
