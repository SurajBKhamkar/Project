import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownereditmenu',
  templateUrl: './ownereditmenu.component.html',
  styleUrls: ['./ownereditmenu.component.css']
})
export class OwnereditmenuComponent implements OnInit {

  editMenu:any;

  constructor(private service:HotelService, private router:Router) { 
    this.editMenu = JSON.parse(window.sessionStorage.getItem("editableMenu"));
    console.log(this.editMenu);
  }

  ngOnInit() {
  }

  updateRecord() {
    this.service.editMenu(this.editMenu).subscribe((result)=>{
      this.editMenu = result;
      console.log(this.editMenu);
      this.router.navigate(['/ownerlistofmenus']);
    },(error)=>{
      console.log(error);
    });
  }

}
