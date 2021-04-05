import { increment, decrement, reset } from './../counter.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngrx-app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  // tslint:disable-next-line: typedef
  increment() {
    this.store.dispatch(increment());
  }

  // tslint:disable-next-line: typedef
  decrement() {
    this.store.dispatch(decrement());
  }

  // tslint:disable-next-line: typedef
  reset() {
    this.store.dispatch(reset());
  }
}
