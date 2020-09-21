import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url="http://localhost:3000/user/";
    

 
  constructor(private http: HttpClient, private router : Router) { }

  addUser(data){
   return this.http.post(this.url+'add',data);
  }

  getdata(){
    return this.http.get(this.url+'getalluser')
  }

  getUserByUsername(username){
    console.log(username);
    return this.http.get(this.url+'getbyusername/'+username);
  }
}
