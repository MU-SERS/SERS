import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 565c42ca5754ffdee1a6c15178695f4275ebf326
