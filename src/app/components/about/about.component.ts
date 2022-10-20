import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service'
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myData:any = {};
  isLogged: boolean = false;
  constructor(
    private tokenService: TokenService,
    private datosPortfolio:PortfolioService,

  ) { }

  ngOnInit(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    
    this.datosPortfolio.getAbout().subscribe((data) => {
      this.myData = data;
    })
  }

}
