import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { PersonalInformation } from '../models/personal-information';
import { TokenService } from './token.service';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  /*Server Heroku */
  url = "https://api-ap-v1.herokuapp.com/api/v1/";

  /* Server local */
  //url = "http://localhost:8080/api/v1/"

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    ) { 
  }

  // ***********************************************************************************
  // **************   |   PERSONAL INFORMATION [METHOD: GET PUT]    | ******************
  // ***********************************************************************************
  getAbout(userName: String): Observable<any> {
    userName = "mequiroga";
    return this.http.get<any>(this.url + 'about/view/' + userName);
  }
  editAbout(personalInformation: PersonalInformation, id: number): Observable<any> {
    return this.http.put<any>(this.url + `about/edit/1`, personalInformation, httpOptions);
  }
}
