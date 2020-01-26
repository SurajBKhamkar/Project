import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerUrl = "http://localhost:8080/food/customer/";

  constructor(private http:HttpClient, private router:Router) { 
  }

  getMenus() {
    return this.http.get(this.customerUrl+"menuList");
  }

  getCustomersOrder(customer) {
    return this.http.post(this.customerUrl+"listOfOrders", customer);
  }

  getAddresses(customer) {
    return this.http.post(this.customerUrl+"getAddresses", customer);
  }

  placeOrders(data){
    return this.http.post(this.customerUrl+"placeOrder", data);
  }

  getSearchedMenuList(name) {
    return this.http.post(this.customerUrl+"searchedMenus", name);
  }

  cancelOrder(order_id) {
    return this.http.post(this.customerUrl+"cancelOrder", order_id);
  }

  deleteAddress(address) {
    return this.http.post(this.customerUrl+"deleteAddress", address);
  }

  addAddressDetails(CompleteAddress) {
    return this.http.post(this.customerUrl+"addAddressDetails", CompleteAddress);
  }

  saveAddressDetails(address) {
    return this.http.post(this.customerUrl+"saveAddress", address);
  }
}
