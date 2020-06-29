import { Router } from 'express'
import UserController from '../app/controllers/UserController'

const routes = Router()

routes.post('/user', UserController.create)
routes.get('/user', UserController.index)

export default routes
