import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {take, tap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  counter$ = interval(1000);

  constructor() {
  }
  ngOnInit(): void {
      this.counter$.pipe( take(5) ).subscribe(val => console.log(val));
  }






}
