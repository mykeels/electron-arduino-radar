# Radar

An electron app, providing a visual indicator of obstacles observed by an ultra-sonic sensor. An arduino project, using the following hardware parts:

- [Ultra-sonic sensor](https://www.jumia.com.ng/generic-ultrasonic-sensor-hc-sr04-16759775.html)
- [Arduino](https://www.arduino.cc)
- Servo
- Breadboard
- Laptop Computer

and software parts:

- [Electron](https://www.npmjs.com/package/electron)
- [Johnny-Five](http://johnny-five.io)
- JavaScript
- [PingFirmata](https://gist.githubusercontent.com/rwaldron/0519fcd5c48bfe43b827/raw/f17fb09b92ed04722953823d9416649ff380c35b/PingFirmata.ino)

![radar](https://media.giphy.com/media/65DcenhMtTz1R1521g/giphy.gif)

## Demo

Here's a [twitter video demo](https://twitter.com/mykeels/status/1096750500903616513).

## Circuit Diagram

Here's the circuit diagram, done with [tinkercad](https://www.tinkercad.com/things/lGjpfkUcbJk-radar/editel).

The only difference is that the sonar is attached to the top of the servo.

![arduino radar circuit diagram](https://pbs.twimg.com/media/DzmT2D1XcAEHOSU.jpg:large)

## Setup

- Flash the [PingFirmata](https://gist.githubusercontent.com/rwaldron/0519fcd5c48bfe43b827/raw/f17fb09b92ed04722953823d9416649ff380c35b/PingFirmata.ino) program unto your Arduino device. You'll need the Arduino IDE for this.
- Clone this Repository.
- Run `npm install`
- Run `./node_modules/.bin/electron-rebuild`
- Run `npm start`

Enjoy!

## References

The CSS for this is from [this codepen](https://codepen.io/yisi/pen/LVMmQy).