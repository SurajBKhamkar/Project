import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlistofhotels',
  templateUrl: './adminlistofhotels.component.html',
  styleUrls: ['./adminlistofhotels.component.css']
})
export class AdminlistofhotelsComponent implements OnInit {

  hotels:any;

  constructor(private service:AdminService) {
    this.listOfHotels();
  }

  ngOnInit() {
  }

  listOfHotels() {
    let res = this.service.listOfHotels()
    res.subscribe((result)=>{
      this.hotels = result;
    })
  }

  deleteHotel(hotel_id) {
    this.service.deleteHotel(hotel_id).subscribe((result)=>{
      console.log(result);
      window.location.reload();
    },(error)=>{
      console.log(error);
    })
  }

}
