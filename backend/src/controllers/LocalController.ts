import { Request, Response, NextFunction } from "express";
import { LocalReq } from "../Models/LocalModel";
import Authenticator from "../services/Authenticator.class";
import IdGenerator from "../services/IdGen.class";

const knex = require("../database");

export class LocalController {
  async getLocals(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = { id: authenticationData.id };

      if (!userId.id) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const results = await knex("locals");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }

  async createLocals(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      if (
        !req.body.local_name ||
        !req.body.address ||
        !req.body.local_id ||
        !req.body.admin_id
      ) {
        throw new Error("Invalid input");
      }

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = { id: authenticationData.id };

      if (!userId.id) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const local: LocalReq = {
        local_name: req.body.local_name,
        address: req.body.address,
        company_id: req.body.local_id,
        admin_id: req.body.admin_id
      };

      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();

      await knex("locals").insert({
        id: id,
        local_name: local.local_name,
        address: local.address,
        company_id: local.company_id,
        admin_id: local.admin_id,
      });

      return res.status(200).send("Empresa criada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async updateLocals(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      if (
        !req.body.local_name ||
        !req.body.address ||
        !req.body.local_id ||
        !req.body.admin_id
      ) {
        throw new Error("Invalid input");
      }

      const { id } = req.params;

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = { id: authenticationData.id };

      if (!userId.id) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const local: LocalReq = {
        local_name: req.body.local_name,
        address: req.body.address,
        company_id: req.body.local_id,
        admin_id: req.body.admin_id
      };

      await knex("locals")
        .update({
          local_name: local.local_name,
          address: local.address,
          company_id: local.company_id,
          admin_id: local.admin_id
        })
        .where({ id });
      return res.status(200).send("Empresa atualizada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async deleteLocals(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params;

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = { id: authenticationData.id };

      if (!userId.id) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }
      await knex("locals").where({ id }).del();

      return res.status(200).send("Empresa deletada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }
}
