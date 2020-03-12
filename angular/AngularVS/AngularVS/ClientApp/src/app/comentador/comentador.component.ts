import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../comentario/comentario';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { Postagem } from '../postagem/postagem';
import { ComentarioService } from '../comentario/comentario.service';

@Component({
  selector: 'app-comentador',
  templateUrl: './comentador.component.html',
  styleUrls: ['./comentador.component.css']
})
export class ComentadorComponent implements OnInit {

  comentario: Comentario = new Comentario();
  autores: Usuario[];
  comentar: boolean = false;

  @Input()
  postagem: Postagem = new Postagem();

  constructor(private usuarioService: UsuarioService,
              private comentarioService: ComentarioService) {
    usuarioService.listar().subscribe(r => {
      this.autores = r;
    });
  }

  ngOnInit() {
  }

  updateAutor(id: string) {
    this.comentario.autorid = parseInt(id);
  }

  enviar() {
    this.comentario.postagemid = this.postagem.id;
    this.comentario.data = new Date();
    this.comentarioService.post(this.comentario).subscribe(c => {
      this.comentar = false;
      this.comentario.texto = "";
      this.comentario.autorid = null;
      this.postagem.comentarios.push(c);
    });
  }

}
