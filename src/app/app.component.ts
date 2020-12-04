import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  behSubject = new BehaviorSubject(0); // beginning value

  constructor() {
  }
  ngOnInit(): void {
    this.behSubject.subscribe({
      next: (value => console.log(`Observer A: ${value}`))
    });
    this.behSubject.next(1);
    this.behSubject.next(2);

    setTimeout(  () => {
      this.behSubject.subscribe({
          next: (value) => console.log(`Observer B: ${value}`)
      });
    }, 1000);
    setTimeout(  () => {
      this.behSubject.next(3);
    }, 2000);

  }






}
