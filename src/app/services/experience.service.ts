import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperience } from '../interface/iexperience';
import { Experience } from '../models/experience';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  //url = "http://localhost:8080/api/v1/experience"
  url = "https://api-ap-v1.herokuapp.com/api/v1/experience";

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {}
  // *********************************************************************************
  // **************   |   EXPERIENCE [METHOD: POST GET PUT DELETE]    | **************
  // *********************************************************************************

  getAll () :Observable<IExperience>{
    return this.http.get<IExperience>(this.url + '/view');
  }
  getById(id: number):Observable<IExperience> {
    return this.http.get<IExperience>( this.url + `/view/${id}`);
  }
  save (experience: Experience) : Observable <any> {
    return this.http.post<any> (this.url + `/create`, experience);
  }
  editById(id: number, experience: IExperience):Observable<any> {
    return this.http.put<IExperience>( this.url + `/edit/${id}` ,experience);
  }
  deleteById (id: number) : Observable <any> {
    return this.http.delete<any>(this.url + `/delete/${id}`)
  }
}
