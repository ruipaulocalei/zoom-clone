import express, { Request, Response } from 'express'

const app = express()
app.set('view engine', 'pug')
app.set('views', __dirname + '/public//views')
app.use('/public', express.static(__dirname + '/public'))
app.get('/', (req: Request, res: Response) => res.render('home'))
app.listen(3333)