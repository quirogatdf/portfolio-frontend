import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myData:any = {};
  isLogged: boolean = false;
  constructor(
    private datosPortfolio:PortfolioService

  ) { }

  ngOnInit(): void {
    
    this.datosPortfolio.getAll().subscribe( (data) => {
      this.myData = data;
    });
  }

}
