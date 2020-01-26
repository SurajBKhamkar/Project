import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  admin:any;

  constructor(private router:Router, private service:DataService) { 
    this.admin = JSON.parse(window.sessionStorage.getItem("user"));
  }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
  }

}
