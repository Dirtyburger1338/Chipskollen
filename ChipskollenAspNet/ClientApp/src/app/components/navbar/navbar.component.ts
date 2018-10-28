import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginInputComponent } from '../login-input/login-input.component';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    //loggedIn:boolean = false;
    private user: SocialUser;
    private loggedIn: boolean;

    constructor(public dialog: MatDialog, private authService: AuthService, private router:Router) {

        // this.auth.loggedInStatus.subscribe((authenticated : boolean) => {
        //     console.log(authenticated);
        //     this.loggedIn = this.auth.isLoggedin
        // });

    }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
      });
    //   this.loggedIn = this.auth.isLoggedin
  }
  logout(){
    this.authService.signOut();

  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginInputComponent, {
      width: '250px'
    });
  }
}
