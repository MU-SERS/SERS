import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  public popoverOpen = false;

  constructor() { }

  ngOnInit(): void {

  }

  public showMenu(): void {
    this.popoverOpen = true;
    
  }

  public closeMenu(): void {
    this.popoverOpen = false;
    
  }

}
