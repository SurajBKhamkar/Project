import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhotelrequest',
  templateUrl: './adminhotelrequest.component.html',
  styleUrls: ['./adminhotelrequest.component.css']
})
export class AdminhotelrequestComponent implements OnInit {

  listOfRequests:any;

  constructor(private service:AdminService, private router:Router) {
    this.listOfRequestedHotels(); 
  }

  ngOnInit() {
  }

  listOfRequestedHotels() {
    this.service.listOfRequestedHotels().subscribe((result)=>{
      this.listOfRequests = result;
    },(error)=>{
      console.log(error);
    })
  }

  approveHotel(hotel_id) {
    this.service.approveHotel(hotel_id).subscribe((result)=>{
      window.location.reload();
      //this.router.navigate(['/adminhotelrequest']);//Pending
    },(error)=>{
      console.log(error)
    });
  }

  rejectHotel(hotel_id) {
    this.service.rejectHotel(hotel_id).subscribe((result)=>{
      window.location.reload();
      //this.router.navigate(['/adminhotelrequest']);//Pending
    },(error)=>{
      console.log(error)
    });
  }
}
