import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlistofuser',
  templateUrl: './adminlistofuser.component.html',
  styleUrls: ['./adminlistofuser.component.css']
})
export class AdminlistofuserComponent implements OnInit {

  users:any;
  
  constructor(private service:AdminService) { 
    this.listOfUsers();
  }

  ngOnInit() {
  }

  listOfUsers() {
    let res = this.service.listOfUsers();
    res.subscribe((result)=>{
      this.users = result;
    })
  }

}
