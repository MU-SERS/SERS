import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IsReadService {

  readReports: string[] = [];
  readTickets: string[] = [];

  constructor() { }
}
