import { Component } from '@angular/core';
import { Postagem } from '../postagem/postagem';
import { PostagemService } from '../postagem/postagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  postagens: Postagem[];

  constructor(private service:PostagemService) {
    service.getAll().subscribe(r => {
      this.postagens = r;
    });
  }


}
