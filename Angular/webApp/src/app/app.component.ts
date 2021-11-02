<<<<<<< HEAD
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component } from '@angular/core';

const SESSION_COOKIE_MINUTES = 5;
const SESSION_COOKIE_IDENTIFIER = 'name=session';

var firebase;
// // var firebase = require('firebase');
// // var firebaseui = require('firebaseui');
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     // List of OAuth providers supported.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });
=======
import {Component} from '@angular/core';
>>>>>>> b62b889295dbb14b587d567360d1a78e8b5748e7

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-root',
<<<<<<< HEAD
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
=======
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
>>>>>>> b62b889295dbb14b587d567360d1a78e8b5748e7
})
export class AppComponent {
  title = 'SERS';
  isLogin = true;
  usernameValue = '';
  passwordValue = '';

  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    
    const hasSession = document.cookie
    .split('; ')
    .find((piece: string) => piece === SESSION_COOKIE_IDENTIFIER);

    if (hasSession) {
      this.isLogin = false;
      this._enablePopovers();
    }
  }

  logout(): void {
    this.isLogin = true;
    this.usernameValue = '';
    this.passwordValue = '';

    // Remove session cookie
    document.cookie = `${SESSION_COOKIE_IDENTIFIER}; max-age=0`;
  }

  login(): void {
    if (this.usernameValue && this.passwordValue) {
      this._loginSuccess();
    }
  }

  private _loginSuccess(): void {
    this.isLogin = false;
    this._enablePopovers();
    const seconds = SESSION_COOKIE_MINUTES * 60; 
    document.cookie = `${SESSION_COOKIE_IDENTIFIER}; max-age=${seconds}`;
  }

  private _enablePopovers(): void {
    this._changeDetectorRef.detectChanges();
  }

  

}

