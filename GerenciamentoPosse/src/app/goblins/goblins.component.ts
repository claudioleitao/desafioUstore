import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goblins',
  templateUrl: './goblins.component.html',
  styleUrls: ['./goblins.component.css']
})
export class GoblinsComponent implements OnInit {

  constructor(private location: Location, /*private dataService: DataService*/) { }

  ngOnInit() {
  }

  getOrdem() {

  }



  voltar() {
    this.location.back();
  }
}
