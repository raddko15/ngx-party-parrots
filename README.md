# ngx-party-parrots
![Image](https://emojis.slackmojis.com/emojis/images/1471119457/987/parrot.gif?1471119457)
## Description:
Angular 7 easter egg components!

## Installation:
![Image](https://emojis.slackmojis.com/emojis/images/1495224265/2306/parrot_mustache.gif?1495224265)
```
  npm i ngx-party-parrots
```
## Basic usage:
The usage consists in three steps.

* Install the library - covered in "Installation" paragraph
* Import NgxPartyParrotsModule to the main module of your app or choose the one where it should be used.
```
imports: [
    NgxPartyParrotsModule
  ],
```
* Use components in your application

The simpliest usage:
```
<ngx-pp-party-parrots
  mode="default"
></ngx-pp-party-parrots>
```

## Recommended usage:
In your component.ts create the variable and function

```
 isPartyParrotRainVisible = false;

  onPPCodeProvided() {
    this.isPartyParrotRainVisible = !this.isPartyParrotRainVisible;
  }
```

In your component.html use two party-parrots components

```
<ngx-pp-code-detector (codeProvided)="onPPCodeProvided()"></ngx-pp-code-detector>
<ngx-pp-party-parrots mode="default"></ngx-pp-party-parrots>
```

Run your application - parrots are hidden.

### Type "parrots"

## Customization
Global config: Use when you want to change default values globally.

##
Contributors:
