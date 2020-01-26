import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhandelorder',
  templateUrl: './ownerhandelorder.component.html',
  styleUrls: ['./ownerhandelorder.component.css']
})
export class OwnerhandelorderComponent implements OnInit {

  orders:any;

  constructor(private service:HotelService, private router:Router) { 
    this.getPendingOrders();
  }

  ngOnInit() {
  }

  getPendingOrders() {
    this.service.getPendingOrders().subscribe((result)=>{
      this.orders = result;
    },(error)=>{
      console.log(error);
    });
  }

  acceptOrder(order){
    this.service.acceptOrder(order).subscribe((result)=>{
      window.location.reload();
    },(error)=>{
      console.log(error);
    });
  }

  deliverOrder(order) {
    this.service.deliverOrder(order).subscribe((result)=>{
      window.location.reload();
    },(error)=>{
      console.log(error);
    });
  }

  cancelOrder(order) {
    this.service.cancelOrder(order).subscribe((result)=>{
      window.location.reload();
    },(error)=>{
      console.log(error);
    });
  }

  checkStatusForAccept(order) {
    if (order.order_id.status=="PENDING") {
      return true;
    }
    else{
      return false;
    }
  }
}
