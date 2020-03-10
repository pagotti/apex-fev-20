import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from './postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  public getAll() {
    return this.http.get<Postagem[]>('/api/postagens');
  }

  public get(id: number) {
    return this.http.get<Postagem>('/api/postagens/' + id);
  }

}
