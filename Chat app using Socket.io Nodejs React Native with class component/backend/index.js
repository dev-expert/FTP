const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

//connection to the socket.io
// io.on('connection', socket => {
//   console.log('a user connected');
//   socket.on('chat message : ', msg => {
//     console.log(msg);
//   });
//   console.log('after socket ');
// });
io.on('connection', socket => {
  console.log('a user connected :D');
  socket.on('chat message', msg => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

app.get('/', (req, res) => {
  res.send('heloooooooooooooooooo');
});

server.listen(port, () => {
  console.log(`listening on : ${port}`);
});
