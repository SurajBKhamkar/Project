import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerlistofmenus',
  templateUrl: './ownerlistofmenus.component.html',
  styleUrls: ['./ownerlistofmenus.component.css']
})
export class OwnerlistofmenusComponent implements OnInit {

  owner:any;
  hotels:any;
  menus:any;

  constructor(private service:HotelService, private router:Router) { 
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
    })
  }

  getLoadAgain(formsData) {
    let data = formsData.form.value;
    this.service.getMenuListOfPerticularHotel(data).subscribe((result)=>{
      this.menus = result;
    },(error)=>{
      console.log(error);
    });
  }

  editMenu(m) {
    window.sessionStorage.setItem("editableMenu", JSON.stringify(m));
    console.log(m);
    this.router.navigate(['/ownereditmenu']);
  }

  deleteMenu(m) {
    this.service.deleteMenu(m).subscribe((result)=>{
      window.location.reload();
    },(error)=>{
      console.log(error);
    })
  }
  
}
