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
const io: SocketIO.Server = new SocketIO.Server();
io.attach(server);
app.listen(3333)