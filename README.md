# ngx-party-parrots ![Image](https://emojis.slackmojis.com/emojis/images/1471119457/987/parrot.gif?1471119457)


## Description: ![Image](https://emojis.slackmojis.com/emojis/images/1495224269/2316/twins_parrot.gif?1495224269)
Angular 7 easter egg components!

## Demo: ![Image](https://emojis.slackmojis.com/emojis/images/1504032127/2844/parrot_ok.png?1504032127)
Coming soon!

## Installation: ![Image](https://emojis.slackmojis.com/emojis/images/1495224265/2306/parrot_mustache.gif?1495224265)
```
  npm i ngx-party-parrots
```
## Basic usage: ![Image](https://emojis.slackmojis.com/emojis/images/1495224268/2312/ski_parrot.gif?1495224268)
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

## Recommended usage: ![Image](https://emojis.slackmojis.com/emojis/images/1495224259/2300/love_parrot.gif?1495224259)
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
Type "parrots" - to display parrots and to hide them - yay you have the easter egg embedded in your app!

## Customization ![Image](https://emojis.slackmojis.com/emojis/images/1495224268/2311/ship_it_parrot.gif?1495224268)
There are two ways of modifying components - by choosing mode or by sending custom props!

Modes:
```
mode="default"
mode="skiing"
mode="snowing"
mode="copsAndSpies"
```
Props:
```
@Input() parrotsAmount: number;
@Input() opacity: number;
@Input() parrotsData: ParrotModel[];
@Input() speed: { min: number, max: number };
@Input() skiingMode: string; // yes/no
@Input() slalomLength: { min: number, max: number };
```

## Contributors: ![Image](https://emojis.slackmojis.com/emojis/images/1495224256/2290/confused_parrot.gif?1495224256)
raddko15,
proxeld,
bulbulator
