import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customercart',
  templateUrl: './customercart.component.html',
  styleUrls: ['./customercart.component.css']
})

export class CustomercartComponent implements OnInit {

  items:Array<any>;
  public total:number=0;
  customer1:any;  

  constructor(private service:CustomerService, private router:Router) {
    this.customer1 = JSON.parse(window.sessionStorage.getItem("user")); 
    this.items = JSON.parse(window.sessionStorage.getItem("cartItems"));
    this.calculateTotal();
  }

  ngOnInit() {
  }

  calculateTotal() {
    this.total = 0;
    if (this.items!=null) {
      this.items.forEach(element => {
        this.total = this.total + element.price;
      });
      window.sessionStorage.setItem("grandTotal", JSON.stringify(this.total));
    }
  }

  removeItem(i: any) {
    var x = 0;
    if (this.items!=null) {
      this.items.forEach(element => {
        if (element==i) {
          this.items.splice(x,1);
          this.calculateTotal();
        }
        x++;
      });
    }
    window.sessionStorage.setItem("cartItems", JSON.stringify(this.items));
  }

  calculateTotalAgain() {
    this.calculateTotal();
  }

  placeOrder() {
    this.items = JSON.parse(window.sessionStorage.getItem("cartItems"));
    
    class MutlipleData {
      
      private cartItems : any;
      private customer : any;
      private orderTotal : number;

      constructor() {
        this.cartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));
        this.customer = JSON.parse(window.sessionStorage.getItem("user"));
        this.orderTotal = JSON.parse(window.sessionStorage.getItem("grandTotal"));
      }
    }  

    let dataToSend = new MutlipleData();

    this.service.placeOrders(dataToSend).subscribe((result)=>{
      window.sessionStorage.setItem("placedOrder", JSON.stringify(result));
      this.router.navigate(['/customerorderplaced']);
    },(error)=>{
      console.log(error);
    });
  }
}
