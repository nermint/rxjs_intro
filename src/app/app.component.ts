import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';
  scrolling = '';
  moveStream$ = fromEvent(document, 'scroll');

  constructor() {
  }
  ngOnInit(): void {
    this.moveStream$.pipe(
      throttleTime(300),
      tap(val => { console.log(val); this.scrolling += 'Scrolling:)  '; })
    ).subscribe();
  }






}
