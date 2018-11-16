import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  grupo: string;
  regiao: string;
  ordem: string;

  constructor(private location: Location, /*private dataService: DataService*/) { }

  ngOnInit() {
  }

  enviar() {
/*    let users = this.dataService.getAllUser();
    users.then(value => {
      value.forEach(element => {
        if (element.grupo === this.grupo && element.regiao === this.regiao) {
          element.ordem = this.ordem;
        }
      });
    })*/
  }

  voltar() {
    this.location.back();
  }
}
