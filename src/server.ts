import express, { Request, Response } from 'express'
import * as http from 'http'
import * as SocketIO from 'socket.io'

const app = express()
app.set('view engine', 'pug')
app.set('views', __dirname + '/public/views')
app.use('/public', express.static(__dirname + '/public'))
app.get('/', (req: Request, res: Response) => res.render('home'))
app.get('/*', (req: Request, res: Response) => res.redirect('/'))

const server: http.Server = http.createServer(app);
const wsServer: SocketIO.Server = new SocketIO.Server();
wsServer.attach(server);

wsServer.on('connection', socket => {
  socket.on('room', message => console.log(message))
})


server.listen(3333)