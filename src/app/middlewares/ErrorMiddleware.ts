import { Request, ErrorRequestHandler, NextFunction, Response } from 'express'

export default (err:ErrorRequestHandler, req: Request, res:Response, next: NextFunction) => {
  return res.status(500).json({ status: 'INTERNAL SERVER ERROR' })
}
