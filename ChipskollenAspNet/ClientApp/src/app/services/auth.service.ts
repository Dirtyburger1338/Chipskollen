import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    @Output() loggedInStatus: EventEmitter<boolean> = new EventEmitter();

    private userIsLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    
    constructor(private http:HttpClient) {}    
  
    public setUserStatus(authenticated:boolean){
        this.userIsLoggedIn = authenticated;
        localStorage.setItem('loggedIn', 'true');
        this.loggedInStatus.emit(authenticated);
    }

    get isLoggedin():boolean{
        return JSON.parse(localStorage.getItem('loggedIn') || this.userIsLoggedIn.toString());
    }
    
    public login(username:string,password:string){
        return this.http.post<ApiResponse>('/api/auth.php',{username,password});
    }
}
interface ApiResponse{
    success: boolean,
    secret:string
}
