import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RouteGuardService {
    
    constructor(public auth: AuthService, public router: Router) {}
    
    
    
    canActivate(): boolean {

        if (!this.auth.isLoggedin) {          
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}