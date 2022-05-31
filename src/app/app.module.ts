import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RollbarService, rollbarFactory, RollbarErrorHandler } from './rollbar';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

// PrimeNG Components
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
