const app = require('express')()
const server = require('http').createServer(app);

const io = require('socket.io')(server,{cors:{
    origin:"*"
}})

io.on("connection",(socket)=>{
    console.log("server is on and ready for connection");

    socket.on("RCB",(message)=>{
        console.log('server recieved the message for RCB');
        io.emit("RCB",message);
    })

    socket.on("MI",(message)=>{
        console.log('server recieved the message for MI');
        io.emit("MI",message);
    })
})
const port = 5000
server.listen(port,()=> console.log(`server is listening at port ${port}`))