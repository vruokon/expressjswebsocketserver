# JavaScript game to play with a emotiv headsests

## Installation

### Clone and install JavaScript game
- Clone repository: ```git clone https://github.com/vruokon/thinkabout.git```
- Install requirements: ```npm install``` inside the project folder

### Install node-red and emotiv-bci plugin
- Install node-red: ```npm install -g --unsafe-perm node-red``` may need admin privileges
- Start node-red: ```node-red```
- Open node-red on your browser (localhost:1880), select manage palette, search for emotiv and install the node-red-contrib-emotiv-bci

### Download and install
- [From emotivs website](https://www.emotiv.com/product/emotiv-bci/) download and install EmotivBCI application. Requires registration and login.

## Starting the Game

- Connect your emotiv Headset to the EmotivBCI app.
- Train a Lift command inside EmovitBCI app.

- Start node-red: ```node-red```

- Start express.js server in thinkjs project folder: ```npm start```
- Open thinkaboutitgame.html in your browser and start thinking about lift command.

