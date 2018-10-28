import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map} from 'rxjs/operators';
import { UserStatusService } from './user-status.service';

@Injectable()
export class RouteGuardService {
    
    constructor(private _userStatus:UserStatusService, public router: Router) {}
    
    
    
    canActivate():boolean{     
        console.log("canactivate?");
        if (this._userStatus.isUserLoggedIn){
            console.log("ctruie");
            return true;
        }
        else{
            console.log("false");
            return false;
        }
    
    }
    
    
}