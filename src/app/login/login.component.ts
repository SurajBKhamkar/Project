import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
  message:any;

  constructor(private service:DataService, private router:Router) { 
  }

  ngOnInit() {
    this.user = JSON.parse(window.sessionStorage.getItem("user"));
    if(this.user==null) {
      this.router.navigate(['/login']);
    }
    else{
      this.towardsTheService(this.user);
    }
  }

  loggingIn(formsData) {
    let data = formsData.form.value;
    this.towardsTheService(data);
  }

  towardsTheService(data) {
    this.service.login(data).subscribe((result)=>{
      this.user = result;
      window.sessionStorage.setItem("active", "1");
      window.sessionStorage.setItem("user", JSON.stringify(this.user));
      if (this.user.role=="ADMIN") {
        this.router.navigate(['/adminhome']);
      }
      else if (this.user.role=="CUSTOMER") {
        this.router.navigate(['/customerhome']);
      }
      else {
        this.router.navigate(['/ownerhome']);
      }
    }, (error)=>{
      this.message = "Username or Password is Incorrect";
      this.router.navigate(['/login']);
      console.log(error);
    })
  }

}
