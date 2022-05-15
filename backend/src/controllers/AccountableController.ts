import { Request, Response } from "express";
const knex = require("../database")

export class AccountableController {
  async getAccountables(req: Request, res: Response): Promise<any> {
    try {
      const results = await knex('accountables')
      return res.json(results)
    } catch (e: any) {
      console.log(e)
    }
  }
}
