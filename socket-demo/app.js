const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');
const io =  new socketIO.Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket)=>{
    console.log('user connected ', socket.id);

    socket.on('username', ({userName})=>{
        socket.on('send-msg', (data)=>{
            console.log(data);
            io.emit('received-msg',{
                msg: data.msg,
                id: socket.id,
                userName
            })
        })
    })

    
    
})

const port = process.env.PORT || 5000;
server.listen(port, ()=>{
    console.log('server is up at port', port)
})