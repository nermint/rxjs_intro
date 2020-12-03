import {Component, OnInit} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  inputVal: string;
  user;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  searchUser(val){
    this.inputVal = val;
    this.http.get(`https://api.github.com/users/${this.inputVal}`)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
    console.log(this.inputVal);
  }



}
