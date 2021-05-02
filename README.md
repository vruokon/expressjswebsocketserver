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

#### Emotiv
- Connect your emotiv Headset to the EmotivBCI app.
- Train a Lift command inside EmovitBCI app.

#### Node-red
- Start node-red: ```node-red```
- From a node-red menu, open "Import" and select file ```./node-red-flows/flows.json``` and finally click "Imoprt"
- Click deploy

#### Express.js server
- Start express.js server in thinkjs project folder: ```npm start```

### Open The game
- Open thinkaboutitgame.html in your browser and start thinking about lift command.

