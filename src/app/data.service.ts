import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:any;

  userUrl="http://localhost:8080/food/users/"

  constructor(private http:HttpClient, private router:Router) { }

  //For all common
  login(user) {
    return this.http.post(this.userUrl, user);
  }

  signUp(userData) {
    return this.http.post(this.userUrl+"signUp", userData);
  }

  signUpAsOwner(userData) {
    return this.http.post(this.userUrl+"signUpAsOwner", userData);
  }

  isLoggedIn() {
    if (window.sessionStorage.getItem("active")=="1") {
        return true;
    } else {
        return false; 
    }
  }

  isAdmin() {
    let cu = JSON.parse(window.sessionStorage.getItem("user"));
    if(cu.role=="ADMIN") {
      return true;
    }
  }

  isCustomer() {
    let cu = JSON.parse(window.sessionStorage.getItem("user"));
    if(cu.role=="CUSTOMER") {
      return true;
    }
  }

  isOwner() {
    let cu = JSON.parse(window.sessionStorage.getItem("user"));
    if(cu.role=="OWNER") {
      return true;
    }
  }

  logout() {
    window.sessionStorage.setItem("active", "0");
    window.sessionStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
