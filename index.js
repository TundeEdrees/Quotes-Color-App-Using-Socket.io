const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const publicDirectoryPath = path.join(__dirname, '/public')
app.use(express.static(publicDirectoryPath))
const port = 3000

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('New websocket connection created')
    socket.emit('welcome', 'welcome' )

    socket.on('quote', ({quote,id}) => {
        console.log(quote,id)
        io.sockets.emit('fserver',{quote,id})
    })
    socket.on('col', ({color,id}) => {
        console.log(id,color)
        io.sockets.emit('color',{color,id})
    })
})

app.get('', (req, res) => {

})
app.get('/server', (req, res) => {
    res.sendFile(publicDirectoryPath+'/server.html')
})
server.listen(port, () => {
    console.log(`Server on port ${port}`)
})