import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'ngx-pp-code-detector',
  template: '',
  styles: []
})
export class CodeDetectorComponent {

  @Output() codeProvided = new EventEmitter<null>();
  private ppCode = ['p','a','r','r','o','t'];
  private ppCodePosition = 0;
  private allowedKeys = {
    'o': 'o',
    'p': 'p',
    'r': 'r',
    't': 't',
    'a': 'a',
  };


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // get the value of the key code from the key map
    const key = this.allowedKeys[event.key];

    // get the value of the required key from the konami code
    const requiredKey = this.ppCode[this.ppCodePosition];

    // compare the key with the required key
    if (key === requiredKey) {

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
