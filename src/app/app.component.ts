import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  subject = new ReplaySubject(3);

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

    setTimeout(  () => {
      this.subject.subscribe({
          next: (value) => console.log(`Observer B: ${value}`)
      });
    }, 2000);
    setTimeout(  () => this.subject.next(5), 3000);

  }






}
