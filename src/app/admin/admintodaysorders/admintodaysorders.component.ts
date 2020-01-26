import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admintodaysorders',
  templateUrl: './admintodaysorders.component.html',
  styleUrls: ['./admintodaysorders.component.css']
})
export class AdmintodaysordersComponent implements OnInit {

  orders:any;
  
  constructor(private service:AdminService) { 
    this.todaysOrders();
  }

  ngOnInit() {
  }

  todaysOrders() {
    let res = this.service.listOfTodaysOrders();
    res.subscribe((result)=>{
      this.orders = result;
    });
  }

}
