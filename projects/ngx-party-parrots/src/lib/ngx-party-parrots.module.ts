import { NgModule } from '@angular/core';
import { NgxPartyParrotsComponent } from './components/ngx-party-parrots/ngx-party-parrots.component';
import { CodeDetectorComponent } from './components/code-detector/code-detector.component';


@NgModule({
  declarations: [NgxPartyParrotsComponent, CodeDetectorComponent],
  imports: [
  ],
  exports: [
    NgxPartyParrotsComponent,
    CodeDetectorComponent
  ]
})
export class NgxPartyParrotsModule { }
