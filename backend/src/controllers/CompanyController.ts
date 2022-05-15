import { Request, Response } from "express";
const knex = require("../database")

export class CompanyController {
  async getCompanies(req: Request, res: Response): Promise<any> {
    try {
      const results = await knex('companies')
      return res.json(results)
    } catch (e: any) {
      console.log(e)
    }
  }
}
