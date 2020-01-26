import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customereditaddress',
  templateUrl: './customereditaddress.component.html',
  styleUrls: ['./customereditaddress.component.css']
})
export class CustomereditaddressComponent implements OnInit {

  address:any;

  constructor(private service:CustomerService, private router:Router) { 
    this.address = JSON.parse(window.sessionStorage.getItem("editAddress"));
  }

  ngOnInit() {
  }

  saveAddressDetails() {
    this.service.saveAddressDetails(this.address).subscribe((result)=>{
      this.router.navigate(['/customerprofile']);
    },(error)=>{
      console.log(error);
    });
  }

}
