import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureState } from './store/reducers/reducer';
import { requestId } from './store/actions/actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data$ = this.store.pipe();
  constructor(private store: Store<FeatureState>) { }

  submit() {
    this.store.dispatch(requestId({obj: {
      id: null,
      user: "ME"
    }}));
  }
}
