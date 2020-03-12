import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  public post(c: Comentario) {
    return this.http.post<Comentario>('/api/comentarios', c);
  }

  public delete(id: number) {
    return this.http.delete('/api/comentarios/' + id);
  }

}
