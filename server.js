var http = require('http');
var server = http.createServer(function (req, res) {
}).listen(8888);//创建http服务
console.log('Server running ');
var io = require('socket.io').listen(server);
io.sockets.on('connection', (socket) => {
    console.log('链接成功');
    socket.on('compile', (v) => {
    socket.broadcast.emit('login', v)
    socket.emit('login', v);
  });   
})