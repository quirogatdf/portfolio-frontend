import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  isLogged = false;

  constructor(
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }
  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
