import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'example-app';
  appForm = new FormGroup({
    mode: new FormControl('default')
  });

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.appForm.get('mode').valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  isPartyParrotRainVisible = false;

  onPPCodeProvided() {
    this.isPartyParrotRainVisible = !this.isPartyParrotRainVisible;
  }
}
