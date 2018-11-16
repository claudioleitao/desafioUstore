import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

import { User } from '../entidades/user';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  private user : User;
  private submitted: boolean;

  constructor(public location: Location, /*private dataService : DataService*/) { }

  ngOnInit() {
    this.initUsers();
  }

  initUsers() {
    this.user = new User();
    this.submitted = false;
  }

  salvar() {
/*    this.dataService.create(this.user);
    alert("Usuario incluido com sucesso!")
    this.location.go("login");*/
  }

  voltar() {
    this.location.go("login");
  }
}
