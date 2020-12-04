import {Component, OnInit} from '@angular/core';
import {AsyncSubject} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  subject = new AsyncSubject();

  constructor() {
  }
  ngOnInit(): void {
    this.subject.subscribe({
      next: (value => console.log(`Observer A: ${value}`))
    });
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
    this.subject.subscribe({
      next: (value) => console.log(`Observer B: ${value}`)
    });
    this.subject.next(5);
    this.subject.complete();

  }






}
