const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3001;

io.on('connection', socket => {
  debugger;
  console.log('a user connected :D');
  debugger;
  socket.on('chat message', msg => {
    console.log(msg);
    // io.emit('chat message', msg);
  });
});

app.get('/', (req, res) => {
  res.send('heloooooooooooooooooo');
});

server.listen(port, () => {
  console.log(`listening on : ${port}`);
});
