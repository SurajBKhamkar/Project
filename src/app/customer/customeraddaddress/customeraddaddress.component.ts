import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customeraddaddress',
  templateUrl: './customeraddaddress.component.html',
  styleUrls: ['./customeraddaddress.component.css']
})
export class CustomeraddaddressComponent implements OnInit {

  customer:any;

  constructor(private service:CustomerService, private router:Router) { 
    this.customer = JSON.parse(window.sessionStorage.getItem("user"));
  }

  ngOnInit() {
  }

  addAddressDetails(data) {
    let add = data.form.value;
    
    console.log(add)

    class completeAddress {
      flat:any;
      building:any;
      landmark:any;
      area:any;
      city:any;
      state:any;
      zip:any;
      addOfUser:any;

      constructor() {
        this.flat = add.flat;
        this.building = add.building;
        this.landmark = add.landmark;
        this.area = add.area;
        this.city = add.city;
        this.state = add.state;
        this.zip = add.zip;
        this.addOfUser = JSON.parse(window.sessionStorage.getItem("user"));
      }

    }

    var CompleteAddress = new completeAddress();
    
    this.service.addAddressDetails(CompleteAddress).subscribe((result)=>{
      this.router.navigate(['/customerprofile']);
    },(error)=>{
      console.log(error);
    })
  }

}
