import { Request, Response, NextFunction } from "express";
const knex = require("../database");

export class UserController {
  async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const results = await knex("users");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }
}
