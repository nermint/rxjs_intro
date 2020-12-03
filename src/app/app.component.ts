import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  // creating observable
  clicking$ = fromEvent(document, 'click');

  constructor() { }


  ngOnInit(): void {
    // subscribe to observable
    this.clicking$.subscribe(event => console.log(event));
  }


}
