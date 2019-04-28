import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPartyParrotsModule } from '../../../ngx-party-parrots/src/lib/ngx-party-parrots.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPartyParrotsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
