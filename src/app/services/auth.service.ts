import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user.js';
import { Signup } from '../models/signup';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authUrl ="http://localhost:8080/api/v1/auth/";
  authUrl = "https://api-ap-v1.herokuapp.com/api/v1/auth/";
  user: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject(JSON.parse(sessionStorage.getItem('token') || '{}'));
  }

  public login(loginUser: LoginUser): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(this.authUrl + 'login', loginUser);
  }
  public new (newUser: Signup): Observable <any> {
    return this.http.post<any>(this.authUrl + 'signup', newUser);
  }
  token() {
    return sessionStorage.getItem('token');
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }
}
