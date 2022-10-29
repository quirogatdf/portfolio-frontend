import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEducation } from '../interface/ieducation';
import { Education } from '../models/education';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  //url = "http://localhost:8080/api/v1/education"
  url = "https://api-ap-v1.herokuapp.com/api/v1/education";

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  // ********************************************************************************
  // **************   |   EDUCATION [METHOD: POST GET PUT DELETE]    | **************
  // ********************************************************************************
  getAll () :Observable<IEducation>{
    return this.http.get<IEducation>(this.url + '/view');
  }
  getById(id: number):Observable<IEducation> {
    return this.http.get<IEducation>( this.url + `/view/${id}`);
  }
  save (education: Education) : Observable <any> {
    return this.http.post<any> (this.url + `/create`, education);
  }
  editById(id: number, education: IEducation):Observable<any> {
    return this.http.put<IEducation>( this.url + `/edit/${id}` ,education);
  }
  deleteById (id: number) : Observable <any> {
    return this.http.delete<any>(this.url + `/delete/${id}`)
  }
}
