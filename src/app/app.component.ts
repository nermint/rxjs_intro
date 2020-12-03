import {Component, OnInit} from '@angular/core';
import {fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  cordinateX: number;
  cordinateY: number;

  moveStream$ = fromEvent(document, 'mousemove');

  constructor() {
  }

  ngOnInit(): void {
    this.moveStream$.subscribe( val => {
      // console.log(val);
      this.cordinateX = val.clientX;
      this.cordinateY = val.clientY;
    });
  }






}
