import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin/admin.service';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.css']
})
export class OwnerhomeComponent implements OnInit {

  hotels:any;
  owner:any;
  message:any;

  constructor(private service:HotelService, private serviceAdmin:AdminService) {
    this.owner = JSON.parse(window.sessionStorage.getItem("user"));
    this.listOfHotels(this.owner);
  }

  ngOnInit() {
  }

  listOfHotels(owner) {
    let res = this.service.listOfHotels(owner).subscribe((result)=>{
      this.hotels = result;
    },(error)=>{
      console.log(error);
    })
  }

  deleteHotel(hotel_id) {
    this.serviceAdmin.deleteHotel(hotel_id).subscribe((result)=>{
      console.log(result);
      window.location.reload();
    },(error)=>{
      console.log(error);
    })
  }

}
