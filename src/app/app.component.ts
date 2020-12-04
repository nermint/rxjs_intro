import {Component, OnInit} from '@angular/core';
import {from, Subject} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  subject = new Subject<number>();

  observable = from([1, 2, 3]);

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

    // subject as an argument
    this.observable.subscribe(this.subject);


  }






}
