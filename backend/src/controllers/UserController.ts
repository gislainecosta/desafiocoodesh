import { Request, Response, NextFunction } from "express";
import { UserReq } from "../Models/UserModel";

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

  async createUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user: UserReq = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
      };

      await knex("users").insert({
        name: user.name,
        address: user.address,
        phone: user.phone
      });

      res.status(200).send("Usuário criado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async updateUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params;

      const user: UserReq = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
      };

      await knex("users")
        .update({
          name: user.name,
          address: user.address,
          phone: user.phone,
        })
        .where({ id });
      res.status(200).send("Usuário atualizado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async deleteUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).del();

      res.status(200).send("Usuário deletado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }
}
