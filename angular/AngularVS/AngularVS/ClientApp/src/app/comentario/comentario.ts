import { Usuario } from "../usuario/usuario";

export class Comentario {
  id: number;
  texto: string;
  data: Date;
  autorid: number;
  autor: Usuario;
  postagemid: number;
}
