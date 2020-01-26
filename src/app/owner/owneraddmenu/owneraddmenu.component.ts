import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owneraddmenu',
  templateUrl: './owneraddmenu.component.html',
  styleUrls: ['./owneraddmenu.component.css']
})
export class OwneraddmenuComponent implements OnInit {

  owner:any; 
  hotels:any;
  selectedHotel:any;

  constructor(private service:HotelService, private router:Router) { 
    this.owner = JSON.parse(window.sessionStorage.getItem("user"));
    this.hotels = this.listOfHotels(this.owner);
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

  addMenu(formsData) {
    let data = formsData.form.value;
    this.service.getHotelObject(data).subscribe((result)=>{
      this.selectedHotel = result;
      data.hotel_id = this.selectedHotel;

      this.service.addMenu(data).subscribe((result)=>{
        this.router.navigate(['/ownerlistofmenus']);
      },(error)=>{
        console.log(error);
      });

    },(error)=>{
      console.log(error);
    });
  }

}
