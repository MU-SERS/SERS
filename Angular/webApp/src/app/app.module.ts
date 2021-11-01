import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutingModule } from './app-routing.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';


//import { GridListDynamicExample } from






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    LandingPageComponent,
    HomePageComponent,
    SignUpPageComponent
  
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
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
<<<<<<< HEAD

=======
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
