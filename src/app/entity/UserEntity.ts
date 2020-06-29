import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id!:number

  @Column({ type: 'text' })
  name!:string

  @Column({ type: 'text' })
  email!:string

  @Column({ type: 'text' })
  password_hash!:string
}
