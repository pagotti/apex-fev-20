import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos:Produto[] = new Array();
  rows = [];
  pedido:Pedido;
  
  constructor(private produtoService:ProdutoService, private pedidoService:PedidoService) { }

  ngOnInit() {
    this.produtoService.list().subscribe(r => {
      this.produtos = r;
      this.rows = this.listToMatrix(this.produtos, 3);
    })
  }

  listToMatrix(list, elementsPerSubArray) {
      let matrix = [], i:number, k:number;
      for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
              k++;
              matrix[k] = [];
          }
          matrix[k].push(list[i]);
      }
      return matrix;
  }

  adicionar(p:Produto) {
    this.pedidoService.inserir(p, this.pedido);
  }

  remover(p:Produto) {

  }

}
