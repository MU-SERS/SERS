import { Component, HostBinding, OnInit } from '@angular/core';
// import { report } from 'process';
import { Observable, of } from 'rxjs';
// import { AngularFirestore } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { IsReadService } from '../is-read.service';

class Student { 
  id: string = '';
  name: string = '';
  number: string = '';
  messages: Message[] = [];
}

class Message {
  userID: string = '';
  timeStamp: number = 0;
  messageBody: string = '';
  incoming: boolean = true;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  studentList: Student[] = [];

  activeChat?: string = undefined;

  inputValue: string = '';

  constructor(
    private afs: AngularFirestore,
    public irs: IsReadService,
  ) { 
    this.afs.collection('Users').snapshotChanges().subscribe(data => {
      data.forEach(s => {
        const studentData = <Student>(s.payload.doc.data());
        studentData.id = s.payload.doc.id;
        studentData.messages = [];
        this.studentList.push(studentData);
      });
    });

    this.afs.collection('messages').snapshotChanges().subscribe(data => {
      this.studentList.forEach(s => s.messages = []);
      data.forEach(m => {
        const messageData = <Message>(m.payload.doc.data());
        this.getStudentById(messageData.userID)?.messages.push(messageData);
      });
      this.studentList.forEach(s => s.messages.sort((b,a) => b.timeStamp - a.timeStamp));
    });


    // this.messages = <Message[][]>data;

    // var student = new Student();
    // student.id = 'GC4E64NW8d7wiXp6sczp';
    // student.name = 'User1';
    // student.phone = '(123)456-7890';
    // this.studentList.push(student);

    // var student2 = new Student();
    // student2.id = '2';
    // student2.name = 'User2';
    // student2.phone = '(123)456-7890+1';
    // this.studentList.push(student2);

    // var message = new Message(); 
    // message.timeStamp = '10-17-1999';
    // message.incoming = false;
    // message.content = 'My friend is bleeding really badly my lat/long is 38.94,-92.32';
    // this.messages[1] = [];
    // this.messages[1].push(message);

    // this._dataService.getReports().subcribe((response) => {
    //   this.tipsList = response.data;
    // })

  }

  ngOnInit(): void {

  }

  openChat(id: string): void {
    this.activeChat = id;
    this.irs.readTickets.push(this.activeChat);
  }

  sendChat(): void {
    const today = new Date();

    this.afs.collection('messages').add({
      messageBody: this.inputValue,
      timeStamp: new Date().getTime(),
      userID: <string>this.activeChat,
      incoming: false,
    });

    // const newMessage = new Message();
    // newMessage.messageBody = this.inputValue;
    // this.getStudentById(<string>this.activeChat)?.messages.push(newMessage);
  }

  getStudentById(id: string): Student | undefined {
    return this.studentList.find(s => s.id === id);
  }

  formatDate(value: number): string {
    return new Date(value).toLocaleString();
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