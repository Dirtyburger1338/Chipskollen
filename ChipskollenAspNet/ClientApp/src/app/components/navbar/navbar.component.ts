import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginInputComponent } from '../login-input/login-input.component';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    loggedIn:boolean = false;
    constructor(public dialog: MatDialog, private auth:AuthService, private user:UserService, private router:Router) {

        this.auth.loggedInStatus.subscribe((authenticated : boolean) => {
            console.log(authenticated);
            this.loggedIn = this.auth.isLoggedin
        });

    }

  ngOnInit() {
      this.loggedIn = this.auth.isLoggedin
  }
  logout(){
      this.user.logout().subscribe((data)=>{
          console.log(data);
        if(data.success){
            this.router.navigate(['']);
            localStorage.removeItem('loggedIn');
            this.loggedIn = false;
        }
        else{
            console.log("Något blev fel");
        }
      })
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginInputComponent, {
      width: '250px'
    });
  }
}
