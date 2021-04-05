import { increment, decrement } from './../counter.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngrx-app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$!: Observable<number>;

  constructor() { }

  // tslint:disable-next-line: typedef
  increment() {

  }

  // tslint:disable-next-line: typedef
  decrement() {

  }

  // tslint:disable-next-line: typedef
  reset() {

  }
}
