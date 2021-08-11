import express, { Request, Response } from 'express'

const app = express()
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.get('/', (req: Request, res: Response) => res.render('home'))
app.listen(3333)