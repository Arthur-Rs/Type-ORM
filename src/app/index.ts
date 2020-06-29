
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import routes from '../routes'
import MiddlewareError from './middlewares/ErrorMiddleware'
class App {
  app: express.Application
  constructor () {
    this.app = express()

    this.Middlewares()
    this.Routes()
    this.ExepectionHandler()
  }

  Middlewares () {
    this.app.use(express.json())
  }

  Routes () {
    this.app.use(routes)
  }

  ExepectionHandler () {
    this.app.use(MiddlewareError)
  }
}

export default new App().app
