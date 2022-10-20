import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  /*Server Heroku */  
  url = "https://api-argentinaprograma.herokuapp.com/api/v1/";
  
  /* Server local */
  //url = "http://localhost:8080/api/v1/"

  constructor(private http: HttpClient) { }

  // ********************************************************************
  // **************   |   ABOUT [METHOD: GET PUT]    | ******************
  // ********************************************************************
  getAbout(userName: String): Observable<any> {
    userName = "mequiroga";
    return this.http.get<any>(this.url + 'about/view/' + username);
  }
}
