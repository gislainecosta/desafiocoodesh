import { Request, Response } from "express";
const knex = require("../database")

export class LocalController {
  async getLocals(req: Request, res: Response): Promise<any> {
    try {
      const results = await knex('locals')
      return res.json(results)
    } catch (e: any) {
      console.log(e)
    }
  }
}