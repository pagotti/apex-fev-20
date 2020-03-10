import { Component, OnInit, Input } from '@angular/core';
import { Postagem } from './postagem';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  @Input()
  postagem: Postagem = new Postagem();

  constructor() { }

  ngOnInit() { 
  }

}
