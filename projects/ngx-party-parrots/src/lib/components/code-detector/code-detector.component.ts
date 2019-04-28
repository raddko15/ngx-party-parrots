import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-pp-code-detector',
  templateUrl: './code-detector.component.html',
  styleUrls: ['./code-detector.component.css']
})
export class CodeDetectorComponent {

  @Output() codeProvided = new EventEmitter<null>();
  private ppCode = ['a'];
  private ppCodePosition = 0;
  private allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // get the value of the key code from the key map
    const key = this.allowedKeys[event.keyCode];

    // get the value of the required key from the konami code
    const requiredKey = this.ppCode[this.ppCodePosition];

    // compare the key with the required key
    if (key === requiredKey) {
      console.log('goood code');

      // move to the next key in the konami code sequence
      this.ppCodePosition++;

      // if the last key is reached, activate cheats
      if (this.ppCodePosition === this.ppCode.length) {
        this.codeProvided.emit();
        this.ppCodePosition = 0;
      }
    } else {
      this.ppCodePosition = 0;
    }
  }

}
