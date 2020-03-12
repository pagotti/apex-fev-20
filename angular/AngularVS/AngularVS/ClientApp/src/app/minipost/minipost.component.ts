import { Component, OnInit, Input } from '@angular/core';
import { Postagem } from '../postagem/postagem';

@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css']
})
export class MinipostComponent implements OnInit {

  @Input()
  postagem: Postagem = new Postagem();

  constructor() { }

  ngOnInit() {
  }

}
