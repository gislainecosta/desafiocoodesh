import { Request, Response, NextFunction } from "express";
const knex = require("../database");

export class LocalController {
  async getLocals(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const results = await knex("locals");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }
}
