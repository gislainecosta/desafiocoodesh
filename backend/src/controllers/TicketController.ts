import { Request, Response } from "express";
const knex = require("../database")

export class TicketController {
  async getTickets(req: Request, res: Response): Promise<any> {
    try {
      const results = await knex('tickets')
      return res.json(results)
    } catch (e: any) {
      console.log(e)
    }
  }
}
