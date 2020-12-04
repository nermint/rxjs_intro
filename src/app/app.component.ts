import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  subject = new Subject<number>();


  constructor() {
  }
  ngOnInit(): void {
      // first observer
    this.subject.subscribe({
      next: (v) => console.log(`Observer first: ${v}`)
    });

    // second observer
    this.subject.subscribe({
      next: (v) => console.log(`Observer second: ${v}`)
    });

    this.subject.next(1); // value is given to subject
    this.subject.next(2); // second value to subject

  }






}
