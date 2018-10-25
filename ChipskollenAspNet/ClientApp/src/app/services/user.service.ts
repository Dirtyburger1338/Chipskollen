import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {    
   
    constructor(private http:HttpClient) {}   
    
    getUserData(){
        return this.http.get<ApiResponse>('/api/dbao.php');
    }

    
      logout() {
        return this.http.get<logoutStatus>('/api/logout.php')
      }
}
interface logoutStatus{
    success:boolean
}
interface ApiResponse{
    success: boolean,
    secret:string
}
