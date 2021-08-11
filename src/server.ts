import express, { Request, Response } from 'express'
import * as http from 'http'
import * as SocketIO from 'socket.io'
import path from 'path'

const app = express()
// app.set('view engine', 'pug')
// app.set('views', __dirname + '/public/views')
// app.use('/public', express.static(__dirname + '/public'))
// app.get('/', (req: Request, res: Response) => res.render('home'))
// app.get('/*', (req: Request, res: Response) => res.redirect('/'))
app.use(express.static(path.resolve(__dirname, 'public')))

const server: http.Server = http.createServer(app);
const wsServer: SocketIO.Server = new SocketIO.Server();
wsServer.attach(server);

wsServer.on('connection', socket => {
  // socket.on('room', (roomName, done) => {
  //   socket.join(roomName)
  // })
  console.log('Connected')
  socket.on('disconnect', () => {
    console.log('Disconnected')
  })

  socket.on('sendMessage', payload => {
    console.log(payload)

    wsServer.emit('Listening', { zoom: 'From Server' })
  })
})


server.listen(3333)