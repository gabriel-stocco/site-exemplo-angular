import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = "https://rickandmortyapi.com/api/character?page="


  constructor(private httpClient: HttpClient) { }

  getCardService(pag: number):Observable<any>{
    return this.httpClient.get<any>(this.apiUrl + pag)
  }
}
