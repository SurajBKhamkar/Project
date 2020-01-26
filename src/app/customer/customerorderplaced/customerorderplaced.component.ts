import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerorderplaced',
  templateUrl: './customerorderplaced.component.html',
  styleUrls: ['./customerorderplaced.component.css']
})
export class CustomerorderplacedComponent implements OnInit {

  orderDetails:any;

  constructor(private service:CustomerService, private router:Router) { 
    this.orderDetails = JSON.parse(window.sessionStorage.getItem("placedOrder"))
  }

  ngOnInit() {
  }

  cancelOrder() {
    this.service.cancelOrder(this.orderDetails.order_id).subscribe((result)=>{
      //window.sessionStorage.setItem("cancelMessage", "Order Cancelled Sucessfully.. Browse for something better..");
      this.router.navigate(['/customerhome']);
    },(error)=>{
      console.log(error);
    })
  }

}
