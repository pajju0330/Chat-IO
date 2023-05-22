const app = require('express')()
const server = require('http').createServer(app);

const io = require('socket.io')(server,{cors:{
    origin:"*"
}})

io.on("connection",(socket)=>{
    console.log("server is on and ready for connection");

    socket.on("chat",(message)=>{
        console.log('server recieved the message');
        socket.broadcast.emit("chat",message);
    })

})
const port = 5000
server.listen(port,()=> console.log(`server is listening at port ${port}`))