import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-ownertodaysorders',
  templateUrl: './ownertodaysorders.component.html',
  styleUrls: ['./ownertodaysorders.component.css']
})
export class OwnertodaysordersComponent implements OnInit {

  owner:any;
  orders:any;
  hotels:any;

  constructor(private service:HotelService) { 
    this.owner = JSON.parse(window.sessionStorage.getItem("user"));
    this.getHotels();
  }

  ngOnInit() {
  }

  getHotels() {
    this.service.listOfHotels(this.owner).subscribe((result)=>{
      this.hotels = result;
    },(error)=>{
      console.log(error);
    });
  }

  getLoadAgain(formsData) {
    let data = formsData.form.value;
    this.service.todaysOrders(data).subscribe((result)=>{
      this.orders = result;
      //console.log(this.orders);
    },(error)=>{
      console.log(error);
    });
  }

}
