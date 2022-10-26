import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {PortfolioService} from '../../services/portfolio.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myData:any = {};
  title = 'Mi lista de tareas';
  
  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.getAbout('mequiroga').subscribe( (data) => {
      this.myData = data;
    });
  }

}
