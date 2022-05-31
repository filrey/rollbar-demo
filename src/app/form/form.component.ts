import { Component, OnInit, Inject } from '@angular/core';
import { RollbarService } from '../rollbar';

import * as Rollbar from 'rollbar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  firstName = '';
  lastName = '';
  address = '';
  city = '';
  state = '';
  zip = '';

  rollbarInfo() {
    // Needs the rollbar object from the constructor.
    this.rollbar.info('angular test log');
  }

  throwError() {
    // Does not need the rollbar object from the constructor,
    // and will still log to Rollbar.
    throw new Error('angular test error');
  }

  ngOnInit(): void {}
}
