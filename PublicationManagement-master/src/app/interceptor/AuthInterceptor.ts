import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor( private localStorage: LocalStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.localStorage.getToken();
        if (!authToken) {
        return next.handle(req);
        }
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        return next.handle(authRequest);
    }
}
