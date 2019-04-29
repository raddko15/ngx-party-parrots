import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example-app';
  isPartyParrotRainVisible = false;
  btnText = 'START';

  appForm = new FormGroup({
    mode: new FormControl('default')
  });

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.appForm.get('mode').valueChanges.subscribe(val => {
      this.onPPCodeProvided();
      console.log(val);
    });
  }


  onPPCodeProvided() {
    this.btnText === 'START' ? this.btnText = 'STOP' : this.btnText = 'START';
    this.isPartyParrotRainVisible = !this.isPartyParrotRainVisible;
  }
}
