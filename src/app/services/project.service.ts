import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interface/iproject';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //url = "http://localhost:8080/api/v1/project"
  url = "https://api-ap-v1.herokuapp.com/api/v1/project";

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }
      // **************************************************************************
  // **************   |   PROJECT [METHOD: POST GET PUT DELETE]    | **************
  // ******************************************************************************

  getAll () :Observable<IProject>{
    return this.http.get<IProject>(this.url + '/view');
  }
  getById(id: number):Observable<IProject> {
    return this.http.get<IProject>( this.url + `/view/${id}`);
  }
  save (project: IProject) : Observable <any> {
    return this.http.post<any> (this.url + `/create`, project);
  }
  editById(id: number, project: IProject):Observable<any> {
    return this.http.put<IProject>( this.url + `/edit/${id}` ,project);
  }
  deleteById (id: number) : Observable <any> {
    return this.http.delete<any>(this.url + `/delete/${id}`)
  }
}
