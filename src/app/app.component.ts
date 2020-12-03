import {Component, OnInit} from '@angular/core';
import { of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  source$ = of('Hello', 'Rxjs', 'Operators', 'I am here');

  constructor() { }


  ngOnInit(): void {
    // subscribe to observable
    this.source$.pipe(
      // add ! to all values
      // map( value => value + '!')
      // except Operators show all values
      filter( value => value !== 'Operators' )
    ).subscribe( val => console.log(val));
  }


}
