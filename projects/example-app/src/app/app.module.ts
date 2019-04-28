import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPartyParrotsModule } from '../../../ngx-party-parrots/src/lib/ngx-party-parrots.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPartyParrotsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
