import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutingModule } from './app-routing.module';

import { LoginPageComponent } from './login-page/login-page.component';
//import { HomePageComponent } from './home-page/home-page.component';
//import { RegisterPageComponent } from './register-page/-page.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent
    //HomePageComponent
    //RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

