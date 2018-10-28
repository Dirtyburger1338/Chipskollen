import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
@Component({
    selector: 'app-login-input',
    templateUrl: './login-input.component.html',
    styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {
    
    hide = false;
    processing : boolean = false;
    loginStatus:string = "";

    constructor(private _authService : AuthService) {         
    }
    
    ngOnInit() {
    }
    
    signInWithGoogle() : void{                
        this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
            (userData) => { //on success
               //this will return user data from google. What you need is a user token which you will send it to the server
                console.log(userData);
            }
        );
    }
}
