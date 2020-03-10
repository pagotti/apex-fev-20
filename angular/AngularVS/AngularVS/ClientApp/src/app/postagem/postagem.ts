import { Comentario } from "../comentario/comentario";

export class Postagem {
  id: number;
  titulo: string;
  data: Date;
  texto: string;
  imagem: string;
  autorid: number;
  comentarios: Comentario[];

}
