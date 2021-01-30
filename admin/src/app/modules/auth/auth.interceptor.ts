import { AuthService } from './services/auth.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private injector:Injector){}

    intercept(req:HttpRequest<any> , next:HttpHandler){
        const authService = this.injector.get(AuthService);
        // console.log(authToken);
        let tokenizedReq = req.clone({
            setHeaders:{
                Authorization:`Bearer ${authService.getToken()}`
            }
        })
        return next.handle(tokenizedReq);
    }
}