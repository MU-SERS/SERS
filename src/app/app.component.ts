import { Component } from '@angular/core';

const SESSION_COOKIE_MINUTES = 5;
const SESSION_COOKIE_IDENTIFIER = 'name=session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SERS';
  isLogin = true;
  usernameValue = '';
  passwordValue = '';

  ngOnInit(): void {
    const hasSession = document.cookie
    .split('; ')
    .find((piece: string) => piece === SESSION_COOKIE_IDENTIFIER);

    if (hasSession) {
      this.isLogin = false;
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
    const seconds = SESSION_COOKIE_MINUTES * 60; 
    document.cookie = `${SESSION_COOKIE_IDENTIFIER}; max-age=${seconds}`;
  }


}

