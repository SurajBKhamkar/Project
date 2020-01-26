import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerregisterhotel',
  templateUrl: './ownerregisterhotel.component.html',
  styleUrls: ['./ownerregisterhotel.component.css']
})
export class OwnerregisterhotelComponent implements OnInit {

  owner:any;
  hotel:any;
  address:any;
  flag:any;

  constructor(private service:HotelService, private router:Router) { 
    window.sessionStorage.setItem("registerHotel", "false");
    this.owner = JSON.parse(window.sessionStorage.getItem("user"));
  }

  ngOnInit() {
  }

  isHotelRegisterd() {
    this.flag = window.sessionStorage.getItem("registerHotel");
    if(this.flag=="true") {
      return true;
    }
    return false;
  }

  registerHotel(formsData) {
    let hotelRegData = formsData.form.value;
    hotelRegData.user_id = this.owner;
    this.hotel = hotelRegData;
    if (this.hotel!=null) {
      window.sessionStorage.setItem("registerHotel", "true");
      this.router.navigate(['/ownerregisterhotel']);
    }
  }

  addHotelDetails(formsData) {
    let hotelAddress = formsData.form.value;
    hotelAddress.user_id = this.owner;
    this.hotel.address_id = hotelAddress;
    console.log(this.hotel);
    //window.sessionStorage.setItem("request", JSON.stringify(this.hotel));
    this.service.addRequest(this.hotel).subscribe((result)=>{
      //Dont go by this.address as name. Its just name
      this.address = result;
      if (this.address!=null) {
        this.router.navigate(['/ownerhome']);
      }
    },(error)=>{
      console.log(error);
    })
  }
}
