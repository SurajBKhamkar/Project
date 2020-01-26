import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  admin:any;

  adminUrl="http://localhost:8080/food/admin/"

  constructor(private http:HttpClient, private router:Router) { }

  listOfUsers() {
    return this.http.get(this.adminUrl+"list");
  }

  listOfHotels() {
    return this.http.get(this.adminUrl+"listOfHotels");
  }

  listOfRequestedHotels() {
    return this.http.get(this.adminUrl+"listOfRequests");
  }

  listOfTodaysOrders() {
    return this.http.get(this.adminUrl+"todayOrders");
  }

  thisMonthOrders() {
    return this.http.get(this.adminUrl+"thisMonth");
  }

  approveHotel(hotel_id) {
    return this.http.post(this.adminUrl+"approveHotel", hotel_id);
  }

  rejectHotel(hotel_id) {
    return this.http.post(this.adminUrl+"rejectHotel", hotel_id);
  }

  deleteHotel(hotel_id) {
    return this.http.post(this.adminUrl+"deleteHotel", hotel_id)
  }
}
