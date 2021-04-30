const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (WebSocket) => {

    //connection is up, let's add a simple simple event
    WebSocket.on('message', (string) => {

        //log the received message and send it back to the client
        console.log('received: %s', string);
        WebSocket.send(`Hello, you sent -> ${string}`);
    });

    //send immediatly a feedback to the incoming connection    
    WebSocket.send('Hi there, I am a WebSocket server lets start jumping.');
});

app.get('/', (req, res) => {
wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('To get qube jump send get request to /jump url.');
    }
  });
  res.sendStatus(200);
})

app.get('/jump', (req, res) => {
 wss.clients.forEach((client) => {
     if (client.readyState === WebSocket.OPEN) {
       client.send('jump');
     }
   });
   res.sendStatus(200);
 })
//start our server
server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${server.address().port}`);
});
