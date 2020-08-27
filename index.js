var express=require('express');
var socket=require('socket.io');

//set up the app

var app=express();
var server=app.listen(5050,function(){
    console.log('Listening to request on port 5050');
});

//Static file 
app.use(express.static('public'));


//setting up socket.io
var io=socket(server);

io.on('connection',function(socket){
    console.log('Made socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);    
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});
 