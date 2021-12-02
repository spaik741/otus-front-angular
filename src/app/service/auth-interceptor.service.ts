import {Injectable} from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/Book";
import {Author} from "../models/Author";
import {TokenStorageService} from "./token-storage.service";

const TOKEN_HEADER = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private tokenStorageService: TokenStorageService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const token = this.tokenStorageService.getToken();
    if (token != null) {
      authRequest = req.clone({headers: req.headers.set(TOKEN_HEADER, token)});
    }
    return next.handle(authRequest);
  }
}

export const authInterceptorProviders = [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}];
