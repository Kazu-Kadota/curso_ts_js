import express from 'express'
import router from './routes/home'

import { AppType } from './models/App'

class App {
  contructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/', router)
  }
}

const app: any = new App().app

export default app
