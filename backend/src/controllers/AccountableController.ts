import { Request, Response, NextFunction } from "express";
import { AccountableReq } from "../Models/AccountableModel";

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

  async createAccountables(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const accountable: AccountableReq = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
      };

      await knex("accountables").insert({
        name: accountable.name,
        address: accountable.address,
        phone: accountable.phone
      });

      res.status(200).send("Responsável criado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async updateAccountables(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params;

      const accountable: AccountableReq = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
      };

      await knex("accountables")
        .update({
          name: accountable.name,
          address: accountable.address,
          phone: accountable.phone,
        })
        .where({ id });
      res.status(200).send("Responsável atualizado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async deleteAccountables(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params;

      await knex("accountables").where({ id }).del();

      res.status(200).send("Responsável deletado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }
}
