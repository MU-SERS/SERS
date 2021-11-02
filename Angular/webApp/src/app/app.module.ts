import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { IsReadService } from './is-read.service';
=======


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
//import { HomePageComponent } from './home-page/home-page.component';
//import { RegisterPageComponent } from './register-page/-page.component';

//import { GridListDynamicExample } from




>>>>>>> b62b889295dbb14b587d567360d1a78e8b5748e7


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TicketsComponent,
    MapComponent,
    ReportsComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'tickets', component: TicketsComponent },
        { path: 'map', component: MapComponent },
        { path: 'reports', component: ReportsComponent }
      ]
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    AngularFirestore,
    IsReadService,
=======
    NavBarComponent,
    LoginPageComponent,
    LandingPageComponent
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
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule
>>>>>>> b62b889295dbb14b587d567360d1a78e8b5748e7
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
