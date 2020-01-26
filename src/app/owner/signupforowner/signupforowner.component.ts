import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupforowner',
  templateUrl: './signupforowner.component.html',
  styleUrls: ['./signupforowner.component.css']
})
export class SignupforownerComponent implements OnInit {

  res:any;
  message:any;
  
  constructor(private service:DataService, private router:Router) { }

  ngOnInit() {
  }

  signUpAsOwner(formData) {
    let reg = formData.form.value;
    this.service.signUpAsOwner(reg).subscribe((result)=>{
      this.res = result;
      if (this.res != null) {
        this.message="Registration Successfull.. You may login now."
        this.router.navigate(['/login']);
      } else {
        this.message="Something wrong please try again";
        this.router.navigate(['/signup']);
      }
    },  (error)=>{
      console.log(error);
    });
  }
}
