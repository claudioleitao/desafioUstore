import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  salvar() {
    
  }

  voltar() {
    this.location.go("login");
  }
}
