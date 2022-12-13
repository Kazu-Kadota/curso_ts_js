import dotenv from 'dotenv'
import express from 'express'
import { resolve } from 'path'
import cors from 'cors'
import helmet from 'helmet'

import home from './routes/home'
import user from './routes/user'
import token from './routes/token'
import aluno from './routes/aluno'
import foto from './routes/foto'

import './database'

dotenv.config()

const whitelist = [
  'https://kazukadota.com.br',
  'http://localhost:3000'
]

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

export class App {
  constructor(port) {
    this.app = express()
    this.middlewares()
    this.routes()
    this.port = port
  }

  middlewares() {
    this.app.use(cors(corsOptions))
    this.app.use(helmet())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')))
  }

  routes() {
    this.app.use('/', home)
    this.app.use('/users/', user)
    this.app.use('/tokens/', token)
    this.app.use('/alunos/', aluno)
    this.app.use('/fotos/', foto)
  }

  listen() {
    this.app.listen(this.port)
  }
}
