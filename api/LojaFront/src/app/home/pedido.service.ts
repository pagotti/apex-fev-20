import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../produto/produto';
import { Pedido } from './pedido';
import { ItemPedido } from './itempedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  public inserir(produto: Produto, pedido:Pedido) {
    if (!pedido) {
      pedido = new Pedido();
      pedido.clienteid = 1;
      pedido.numeropedido = "0001";
      pedido.total = 0;
      pedido.desconto = 0;
      this.http.post<Pedido>("http://localhost:53738/api/pedidos", pedido).
        subscribe(p => {
          let item = new ItemPedido();
          item.pedidoid = p.id;
          item.produtoid = produto.id;
          item.quantidade = 1;
          item.valorunitario = produto.preco;
          return this.http.post<ItemPedido>("http://localhost:53738/api/itenspedido", item);
        });
    } else {
      this.http.get<ItemPedido>("http://localhost:53738/api/itenspedido/pedido/"+ pedido.id +"/produto/"+ produto.id).
        subscribe(item => {
          item.quantidade++;
          return this.http.put<ItemPedido>("http://localhost:53738/api/itenspedido/" + item.id, item)
        })
    } 

  }

  remover(p: Produto, pedido:Pedido) {

  }
  
}
