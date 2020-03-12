import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comentario } from './comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input()
  comentario: Comentario = new Comentario();

  @Output()
  editar: EventEmitter<null> = new EventEmitter();

  @Output()
  excluir: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
