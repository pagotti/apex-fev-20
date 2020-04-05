import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input()
  produto: Produto = new Produto();

  @Output()
  adicionar: EventEmitter<null> = new EventEmitter();

  @Output()
  remover: EventEmitter<null> = new EventEmitter();

  quantidade: number = 1;
  
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.quantidade++;
    this.adicionar.emit();
  }

  remove() {
    this.quantidade--;
    if (this.quantidade < 1)
      this.quantidade = 1;
    this.remover.emit();
  }

}
