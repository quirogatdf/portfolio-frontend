import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from 'src/app/models/login-user';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `body{
      background-color:blue;
    }`
  ]
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUser!: LoginUser;
  username!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    /* Comprobar si estamos logueado */
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.login(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        /*Se almacena en el navegador */
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities)
        this.roles = data.authorities;
        this.router.navigate(['/'])
      }, err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMessage = err.error.message;
      }
    )
  }
}
