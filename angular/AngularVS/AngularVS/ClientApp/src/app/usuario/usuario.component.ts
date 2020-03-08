import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  adding: boolean = false; // controla quando adiciona um novo
  painel: boolean = false;
  nome: string;
  idade: string;
  id: number;

  constructor(private service: UsuarioService) {
    service.listar().subscribe(result => {
      this.usuarios = result;
    });
  }

  ngOnInit() {
  }

  novo() {
    this.adding = true;
    this.painel = true;
    this.nome = '';
    this.idade = '';
  }

  salvar() {
    let u: Usuario = new Usuario();
    u.nome = this.nome;
    u.idade = parseInt(this.idade);

    if (this.adding) {
      this.service.inserir(u).subscribe(resultado => {
        this.usuarios.push(resultado);
        this.painel = false;
      });
    } else {
      u.id = this.id;
      this.service.atualizar(u).subscribe(resultado => {
        let index = this.usuarios.findIndex(x => x.id == u.id);
        this.usuarios.splice(index, 1, u);
        this.painel = false;
      });
    }
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(resultado => {
      let index = this.usuarios.findIndex(x => x.id == id);
      this.usuarios.splice(index, 1);
    });
  }

  alterar(usuario: Usuario) {
    this.nome = usuario.nome;
    this.idade = usuario.idade + '';
    this.id = usuario.id;
    this.painel = true;
    this.adding = false;
  }

}
