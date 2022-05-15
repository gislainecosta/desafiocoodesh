import { Request, Response, NextFunction } from "express";
const knex = require("../database");

export class AccountableController {
  async getAccountables(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const results = await knex("accountables");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }
}
