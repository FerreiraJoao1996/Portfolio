import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { ProjetosData } from './projetosData';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private apiUrl = `https://api.github.com/users/FerreiraJoao1996/repos`;

  constructor(private http:HttpClient) {

   }
   getProjeto():Observable<ProjetosData[]>{
    const url = `https://api.github.com/users/FerreiraJoao1996/repos`;
    return this.http.get<ProjetosData[]>(url).pipe(
      map(username => [...new Set(username)])
    );

   }

   @Input()
   getDataCount() {
    return this.http.get<ProjetosData[]>(this.apiUrl).pipe(
      map(data => data.length)
      );
    }

    getPaginatedData(pagina: number, paginaTamanho: number): Observable<any> {
      let params = new HttpParams()
        .set('pagina', pagina.toString())
        .set('paginaTamanho', paginaTamanho.toString());
  
      return this.http.get('https://api.github.com/users/FerreiraJoao1996/repos', { params }).pipe(
        map(res => res)
      );
    }
  }

