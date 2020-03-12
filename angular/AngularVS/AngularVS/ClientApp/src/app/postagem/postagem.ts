import { Comentario } from "../comentario/comentario";

export class Postagem {
  id: number;
  titulo: string;
  data: Date;
  texto: string;
  imagem: string = "null.png";
  autorid: number;
  comentarios: Comentario[];

}
