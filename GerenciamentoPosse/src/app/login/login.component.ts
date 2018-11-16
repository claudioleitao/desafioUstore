import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { Location } from '@angular/common';


import { User } from '../entidades/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  entrar() {
    alert("Logou!!!!");
  }

  cadastrar() {
    this.location.go("cadastro");
  }
}
