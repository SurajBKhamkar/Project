import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  ownerUrl="http://localhost:8080/food/owner/"

  constructor(private http:HttpClient, private router:Router) { }

  addHotelAddress(hotel) {
    return this.http.post(this.ownerUrl+"addHotelAddress", hotel);
  }

  addRequest(hotel) {
    return this.http.post(this.ownerUrl+"addRequest",hotel);
  }

  addMenu(menu) {
    return this.http.post(this.ownerUrl+"addMenu", menu);
  }

  listOfHotels(owner) {
    return this.http.post(this.ownerUrl+"listOfHotels", owner);
  }

  getHotelObject(id) {
    return this.http.post(this.ownerUrl+"getHotelObject", id);
  }

  getMenuListOfPerticularHotel(id) {
    return this.http.post(this.ownerUrl+"getMenus", id);
  }

  editMenu(menu) {
    console.log(menu);
    return this.http.post(this.ownerUrl+"editMenu", menu);
  }

  deleteMenu(menu) {
    return this.http.post(this.ownerUrl+"deleteMenu", menu);
  }

  updateOrderStatus(order) {
    return this.http.post(this.ownerUrl+"updateOrder",order);
  }

  getPendingOrders() {
    return this.http.get(this.ownerUrl+"pendingOrders");
  }

  acceptOrder(orderPlusMenu) {
    return this.http.post(this.ownerUrl+"acceptOrder", orderPlusMenu);
  }

  deliverOrder(orderPlusMenu) {
    return this.http.post(this.ownerUrl+"deliverOrder", orderPlusMenu);
  }

  cancelOrder(orderPlusMenu) {
    return this.http.post(this.ownerUrl+"cancelOrder", orderPlusMenu);
  }

  todaysOrders(hotel_id) {
    return this.http.post(this.ownerUrl+"todaysOrders",hotel_id);
  }
}
