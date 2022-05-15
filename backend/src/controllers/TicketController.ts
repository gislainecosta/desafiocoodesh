import { Request, Response, NextFunction } from "express";
const knex = require("../database");

export class TicketController {
  async getTickets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const results = await knex("tickets");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }
}
