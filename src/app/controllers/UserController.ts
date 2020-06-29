import { Request, Response } from 'express'
import { createConnection } from 'typeorm'
import UserModel from '../entity/UserEntity'

class UserController {
  async create (req: Request, res: Response) {
    createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [
        UserModel
      ],
      synchronize: true,
      logging: false
    }).then(async connection => {
      const { name, email, password_hash } = req.body
      const User = new UserModel()
      User.name = name
      User.email = email
      User.password_hash = password_hash

      await connection.manager.save(User)
      console.log('SUCESS')
    }).catch((err) => { console.log(err) })

    return res.json({ status: 'SUCCESS' })
  }

  async index (req: Request, res: Response) {
    createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [
        UserModel
      ],
      synchronize: true,
      logging: false
    }).then(async connection => {
      const UserRepository = connection.getRepository(UserModel)
      const User = await UserRepository.find()
      return res.json(User)
    }).catch((err) => { console.log(err) })
  }
}

export default new UserController()
