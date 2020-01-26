import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  menus:any;
  cart=[];
  customer:any;
  msg:any;

  constructor(private service:CustomerService, private router:Router) {
    this.menus = this.getMenus();
    this.customer = JSON.parse(window.sessionStorage.getItem("user"));
    this.msg = window.sessionStorage.getItem("cancelMessage");
  }

  ngOnInit() {
    
  }

  getMenus() {
    this.service.getMenus().subscribe((result)=>{
      this.menus = result;
    },(error)=>{
      console.log(error);
    });
  }

  addToCart(menu) { 
    let res = this.check(menu);
    menu.quantity=1;
    if (res == true) {
      this.cart.push(menu);
      window.sessionStorage.setItem("cartItems", JSON.stringify(this.cart));
    }
  }

  check(menu) {
    let s = this.cart.indexOf(menu);
    if(s == -1) {
      return true;
    }
    return false;
  }

  goToCart() {
    this.router.navigate(["/customercart"]);
  }

  searchByName(menuName) {
    let name = menuName.form.value;
    this.service.getSearchedMenuList(name).subscribe((result)=>{
      this.menus = result;
    },(error)=>{
      console.log(error);
    });
  }
}
