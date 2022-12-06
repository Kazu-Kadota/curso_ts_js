import dotenv from 'dotenv'
import express from 'express'
import { resolve } from 'path'

import home from './src/routes/home'
import user from './src/routes/user'
import token from './src/routes/token'
import aluno from './src/routes/aluno'
import foto from './src/routes/foto'

import './src/database'

dotenv.config()

export class App {
  constructor(port) {
    this.app = express()
    this.middlewares()
    this.routes()
    this.port = port
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(resolve(__dirname, 'uploads')))
  }

  routes() {
    this.app.use('/', home)
    this.app.use('/users/', user)
    this.app.use('/tokens/', token)
    this.app.use('/alunos/', aluno)
    this.app.use('/fotos/', foto)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log()
      console.log(`Escutando na porta ${this.port}`)
      console.log(`CTRL + Clique em http://localhost:${this.port}`)
    })
  }
}
