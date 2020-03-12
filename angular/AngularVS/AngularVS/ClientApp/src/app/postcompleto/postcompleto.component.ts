import { Component, OnInit } from '@angular/core';
import { Postagem } from '../postagem/postagem';
import { PostagemService } from '../postagem/postagem.service';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../comentario/comentario';
import { ComentarioService } from '../comentario/comentario.service';

@Component({
  selector: 'app-postcompleto',
  templateUrl: './postcompleto.component.html',
  styleUrls: ['./postcompleto.component.css']
})
export class PostcompletoComponent implements OnInit {

  postagemcompleta: Postagem = new Postagem();

  constructor(private service: PostagemService,
              private route: ActivatedRoute,
              private comentarioService: ComentarioService) {
    route.params.subscribe(p => {
      service.get(p.id).subscribe(r => {
        this.postagemcompleta = r;
      });
    });
  }

  ngOnInit() {
  }

  editar(c:Comentario) {
    
  }

  excluir(c:Comentario) {
    this.comentarioService.delete(c.id).subscribe(() => {
      let index = this.postagemcompleta.comentarios.findIndex(x => x.id == c.id);
      this.postagemcompleta.comentarios.splice(index, 1);
    });
  }

}
