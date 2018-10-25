import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    message:any;
    
    constructor(private user:UserService) {
    }
    
    ngOnInit() {
        
        this.user.getUserData().subscribe(data => {
            console.log(data);
            this.message = data;
            if(!data.success){
                localStorage.removeItem('loggedIn');
            }
        });
        
    }
    
}
