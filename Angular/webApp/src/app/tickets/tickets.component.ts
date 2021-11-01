import { Component, HostBinding, OnInit } from '@angular/core';
// import { report } from 'process';
import { Observable, of } from 'rxjs';

class Student { 
  id: number = 0;
  name: string = '';
  phone: string = '';
}

class Message {
  timeStamp: string = '';
  content: string = '';
  incoming: boolean = true;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  studentList: Student[] = [];

  messages: Message[][] = [];

  activeChat: number = 0;

  inputValue: string = '';

  constructor() { 
    var student = new Student();
    student.id = 1;
    student.name = 'alex';
    student.phone = '(123)456-7890';
    this.studentList.push(student);

    var student2 = new Student();
    student2.id = 2;
    student2.name = 'alex2';
    student2.phone = '(123)456-7890+1';
    this.studentList.push(student2);

    var message = new Message(); 
    message.timeStamp = '10-17-1999';
    message.incoming = false;
    message.content = 'My friend is bleeding really badly my lat/long is 38.94,-92.32';
    this.messages[1] = [];
    this.messages[1].push(message);

    // this._dataService.getReports().subcribe((response) => {
    //   this.tipsList = response.data;
    // })

  }

  ngOnInit(): void {
  }

  openChat(id:number): void {
    this.activeChat = id;
  }

  sendChat(): void {
    const newMessage = new Message();
    newMessage.content = this.inputValue;
    this.messages[this.activeChat].push(newMessage);
  }


}


// class dataService {
//     public getReports(): Observable<Report[]> {
//       return of([
//         new report(),
//         new report(),
//         new report()
//       ]);
//        this.httpClient.post('my-server-endpointurl/reports')
//     }
// }