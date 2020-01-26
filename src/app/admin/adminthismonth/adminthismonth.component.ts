import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminthismonth',
  templateUrl: './adminthismonth.component.html',
  styleUrls: ['./adminthismonth.component.css']
})
export class AdminthismonthComponent implements OnInit {

  orders:any;

  constructor(private service:AdminService) { 
    this.thisMonthOrders();
  }

  ngOnInit() {
  }

  thisMonthOrders() {
    let res = this.service.thisMonthOrders();
    res.subscribe((result)=>{
      this.orders = result;
    })
  }
}
