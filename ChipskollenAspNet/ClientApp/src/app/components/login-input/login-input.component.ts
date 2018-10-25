import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-input',
    templateUrl: './login-input.component.html',
    styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {
    
    hide = false;
    processing : boolean = false;
    loginStatus:string = "";

    constructor(private auth:AuthService) { 
        
    }
    
    ngOnInit() {
    }
    
    loginUser(event:any, email:any,password:any){
        this.processing = true;
        this.loginStatus = "";
        event.preventDefault();
        this.auth.login(email,password).subscribe(data => {
            console.log(data);
            this.auth.setUserStatus(data.success);
            this.processing = false;

            if(data.success){
                this.loginStatus = "Inloggning lyckad!"
            }
            else{
                this.loginStatus = "Inloggning misslyckad.."
            }
        });
        
        
    }
}
