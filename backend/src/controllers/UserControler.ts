import { Request, Response } from "express";
const knex = require("../database")

export class UserController {
  async getUsers(req: Request, res: Response): Promise<any> {
    try {
      const results = await knex('users')
      return res.json(results)
    } catch (e: any) {
      console.log(e)
    }
  }
}
