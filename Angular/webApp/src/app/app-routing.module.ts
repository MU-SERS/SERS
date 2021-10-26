import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//this is where we import the "pages" or folders within the app folder to make them visable.

import { LoginPageComponent } from './login-page';
import { LandingPageComponent } from './landing-page';

// Add others in future for more pages to be routed.

//import { HomePageComponent } from './home-page';
//import { RegisterPageComponent } from './register-page';


const routes: Routes = [
    //{path: '', component:LoginPageComponent },
    //{path: 'register', component:RegisterPageComponent },
    {path: 'login', component:LoginPageComponent },

    //because theres nothing it auto defaults to the page.
    {path: '', component:LandingPageComponent },


    

    //otherwise rediredt to home

    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);