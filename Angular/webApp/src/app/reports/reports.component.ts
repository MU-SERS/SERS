import { Component, OnInit } from '@angular/core';

class Tip { 
  date: string = '';
  public report: Report = new Report();
}

class Report {
  constructor(public title = '', public body = '') {
  }
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  tipList: Tip[] = [];

  activeTip?: Tip;

  constructor() { 
    var tip = new Tip();
    tip.date = '10-19-21';
    var report = new Report();
    report.title = 'What i saw in class';
    report.body = 'My friend is bleeding really badly';
    tip.report = report;
    this.tipList.push(tip);

    var tip2 = new Tip();
    var report2 = new Report();
    tip2.date = '10-20-21';
    report2.title = 'What i saw at the dorm';
    report2.body = 'My friend is dead';
    tip2.report = report2;
    this.tipList.push(tip2);
  }

  ngOnInit(): void {
  }

  openTip(index: number): void {
    this.activeTip = this.tipList[index];
  }

}
