import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  customer:any;
  orders:any;
  addresses:any;

  constructor(private service:CustomerService, private router:Router) { 
    this.customer = JSON.parse(window.sessionStorage.getItem("user"));
    this.getAddresses();
  }

  ngOnInit() {
    window.sessionStorage.setItem("page","false");
  }

  getAddresses() {
    this.service.getAddresses(this.customer).subscribe((result)=>{
      this.addresses = result;
    },(error)=>{
      console.log(error);
    })
  }

  check(res) {
    console.log(res);
    if(res=="about") {
      window.sessionStorage.setItem("page","about");
    }
    else if(res=="order") {
      this.service.getCustomersOrder(this.customer).subscribe((result)=>{
        this.orders = result;
        console.log(this.orders);
        },(error)=>{
        console.log(error);
        });
      window.sessionStorage.setItem("page","order");
    }
    else {
      window.sessionStorage.setItem("page","address");
    }
  }

  isAbout() {
    let c = window.sessionStorage.getItem("page");
    if(c=="about")
      return true;
    return false;
  }

  isOrders() {
    let c = window.sessionStorage.getItem("page");
      if(c=="order") {
      return true;
      }
    return false;
  }

  isAddress() {
    let c = window.sessionStorage.getItem("page");
    if(c=="address")
      return true;
    return false;
  }

  editAddress(a) {
    window.sessionStorage.setItem("editAddress", JSON.stringify(a));
    this.router.navigate(['/customereditaddress']);
  }

  deleteAddress(a) {
    this.service.deleteAddress(a).subscribe((result)=>{
      window.location.reload();
    },(error)=>{
      console.log(error);
    });
  }

}