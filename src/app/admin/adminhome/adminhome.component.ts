import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  admin:any;

  constructor(private service:DataService, private http:HttpClient) { 
    this.admin = JSON.parse(window.sessionStorage.getItem("user"));
  }

  ngOnInit() {
  }

}
