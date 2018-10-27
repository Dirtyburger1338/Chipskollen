import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RouteGuardService {
    
    constructor(public auth: AuthService, public router: Router) {}
    
    
    
    canActivate(): boolean {

        if (!this.auth.isLoggedin) {          
            this.router.navigate(['']);
            console.log("not logged in");
            return false;
        }
        console.log("logged in");
        return true;
    }
}