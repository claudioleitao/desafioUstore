import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';


import { User } from '../entidades/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName: string;
  private password: string;

  constructor(public location: Location, /*private dataService : DataService*/) { }

  ngOnInit() {
    this.newUsers();
  }

  newUsers() : void {
  }

  entrar() {
  /*  let listUsers = this.dataService.getAllUser();
    listUsers.then(value => {
      value.forEach(element => {
        if (element.nome === this.userName && element.senha === this.password)
          this.location.go(element.grupo);
        else
          alert("Login ou senha inválidos!");
      });
    })*/
  }

  cadastrar() {
    this.location.go("cadastro");
  }
}
