import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { LoginInputComponent } from '../../components/login-input/login-input.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    loggedIn:boolean = false;
    
    constructor(public dialog: MatDialog, private auth:AuthService) { 
        
        this.auth.loggedInStatus.subscribe((authenticated : boolean) => {
            console.log(authenticated);
            this.loggedIn = this.auth.isLoggedin
        });
        
    }
    
    ngOnInit() {
    }
    
    login(){
        const dialogRef = this.dialog.open(LoginInputComponent, {
            width: '250px'
          });
    }
}
