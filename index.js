const express = require("express")
const app = express()
const path = require("path")

app.use(express.json())

const server = app.listen(5000, ()=>{
    console.log("Server is runnin on localhost:5000");
})

app.get("/", (req,res)=>{
    var options = {
        root : path.join(__dirname)
    }
    var filename = "index.html"
    res.sendfile(filename, options)
})

const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log("New user Connected");

    socket.on("disconnect", (socket)=>{
        console.log("User disconnected");
    })
})