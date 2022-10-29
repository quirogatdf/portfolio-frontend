import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from '../interface/iskill';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  //url = "http://localhost:8080/api/v1/skill"
  url = "https://api-ap-v1.herokuapp.com/api/v1/skill";

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }
    // **************************************************************************
  // **************   |   SKILL [METHOD: POST GET PUT DELETE]    | **************
  // ****************************************************************************

  getAll () :Observable<ISkill>{
    return this.http.get<ISkill>(this.url + '/view');
  }
  getById(id: number):Observable<ISkill> {
    return this.http.get<ISkill>( this.url + `/view/${id}`);
  }
  save (skill: ISkill) : Observable <any> {
    return this.http.post<any> (this.url + `/create`, skill);
  }
  editById(id: number, skill: ISkill):Observable<any> {
    return this.http.put<ISkill>( this.url + `/edit/${id}` ,skill);
  }
  deleteById (id: number) : Observable <any> {
    return this.http.delete<any>(this.url + `/delete/${id}`)
  }
}
