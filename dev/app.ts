/// <reference path="lib_interfaces/express.d.ts"/>
/// <reference path="lib_interfaces/socket.io.d.ts"/>
/// <reference path="lib_interfaces/node.d.ts"/>
/// <reference path="noti.api.notify.ts"/>

var port = process.env.NODE_PORT || 3000
var app = <Express.Application>require('express')();
var http = require('http').Server(app);
var io = <SocketIO.IO>require('socket.io')(http);
var notifyAPI = <(req, res: Express.Response) => void>require(__dirname + "/noti.api.notify.js").create(io);
app.get('/web/', function(req, res){
  console.log(req.url);
  res.sendFile(__dirname + '/src/index.html');
});

app.get('/notify', notifyAPI);

io.on('connection', function(socket: SocketIO.Socket){
  console.log('a user connected : ' + socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('join', function(appnames:[string]) {
    for(var i = 0; i < appnames.length; i++) {
      socket.join(appnames[i]);
      console.log(socket.id + ' join to ' + appnames[i]);
    }

  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
