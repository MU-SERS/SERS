import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  
})
export class LandingPageComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
