import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminlistofuserComponent } from './admin/adminlistofuser/adminlistofuser.component';
import { AdmintodaysordersComponent } from './admin/admintodaysorders/admintodaysorders.component';
import { AdminthismonthComponent } from './admin/adminthismonth/adminthismonth.component';
import { AdminhotelrequestComponent } from './admin/adminhotelrequest/adminhotelrequest.component';
import { AdminlistofhotelsComponent } from './admin/adminlistofhotels/adminlistofhotels.component';
import { OwnerregisterhotelComponent } from './owner/ownerregisterhotel/ownerregisterhotel.component';
import { OwnerhomeComponent } from './owner/ownerhome/ownerhome.component';
import { SignupforownerComponent } from './owner/signupforowner/signupforowner.component';
import { OwneraddmenuComponent } from './owner/owneraddmenu/owneraddmenu.component';
import { OwnerlistofmenusComponent } from './owner/ownerlistofmenus/ownerlistofmenus.component';
import { OwnereditmenuComponent } from './owner/ownereditmenu/ownereditmenu.component';
import { OwnertodaysordersComponent } from './owner/ownertodaysorders/ownertodaysorders.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { CustomercartComponent } from './customer/customercart/customercart.component';
import { CustomerprofileComponent } from './customer/customerprofile/customerprofile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { CustomerorderplacedComponent } from './customer/customerorderplaced/customerorderplaced.component';
import { CustomeraddaddressComponent } from './customer/customeraddaddress/customeraddaddress.component';
import { CustomereditaddressComponent } from './customer/customereditaddress/customereditaddress.component';
import { OwnerhandelorderComponent } from './owner/ownerhandelorder/ownerhandelorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminhomeComponent,
    AdminlistofuserComponent,
    AdmintodaysordersComponent,
    AdminthismonthComponent,
    SignupComponent,
    OwnerregisterhotelComponent,
    OwnerhomeComponent,
    AdminhotelrequestComponent,
    AdminlistofhotelsComponent,
    SignupforownerComponent,
    OwneraddmenuComponent,
    OwnerlistofmenusComponent,
    OwnereditmenuComponent,
    OwnertodaysordersComponent,
    CustomerhomeComponent,
    CustomercartComponent,
    CustomerprofileComponent,
    HomepageComponent,
    AdminprofileComponent,
    CustomerorderplacedComponent,
    CustomeraddaddressComponent,
    CustomereditaddressComponent,
    OwnerhandelorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"homepage", component:HomepageComponent},
      {path:"login", component:LoginComponent},
      {path:"signup", component:SignupComponent},
      {path:"signupforowner", component:SignupforownerComponent},
      {path:"adminhome", component: AdminhomeComponent},
      {path:"adminlistofusers", component: AdminlistofuserComponent},
      {path:"admintodaysorders", component: AdmintodaysordersComponent},
      {path:"adminthismonth", component:AdminthismonthComponent},
      {path:"adminhotelrequest", component:AdminhotelrequestComponent},
      {path:"adminlistofhotels", component:AdminlistofhotelsComponent},
      {path:"adminprofile", component:AdminprofileComponent},
      {path:"ownerhome", component:OwnerhomeComponent},
      {path:"ownerregisterhotel", component:OwnerregisterhotelComponent},
      {path:"owneraddmenu", component:OwneraddmenuComponent},
      {path:"ownerlistofmenus",component:OwnerlistofmenusComponent},
      {path:"ownereditmenu", component:OwnereditmenuComponent},
      {path:"ownertodaysorders", component:OwnertodaysordersComponent},
      {path:"ownerhandelorder", component:OwnerhandelorderComponent},
      {path:"customerhome", component:CustomerhomeComponent},
      {path:"customercart", component:CustomercartComponent},
      {path:"customerprofile", component:CustomerprofileComponent},
      {path:"customerorderplaced", component:CustomerorderplacedComponent},
      {path:"customeraddaddress", component:CustomeraddaddressComponent},
      {path:"customereditaddress", component:CustomereditaddressComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
