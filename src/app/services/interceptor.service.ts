import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = sessionStorage.getItem('AuthToken') || 'token';
    //console.log("Archivo Interceptor Service, el token no es nulo: ", token);
    const headers = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    return next.handle(headers);
  }

}
