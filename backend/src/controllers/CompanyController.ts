import { Request, Response, NextFunction } from "express";
import { CompanyReq } from "../Models/CompanyModel";
import Authenticator from "../services/Authenticator.class";

const knex = require("../database");

export class CompanyController {
  async getCompanies(
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

      const results = await knex("companies");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }

  async createCompanies(
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

      const company: CompanyReq = {
        company_name: req.body.company_name,
        cnpj: req.body.cnpj,
        company_description: req.body.company_description,
        company_admin: req.body.company_admin
      }

      await knex("companies")
      .insert({
        company_name: company.company_name,
        cnpj: company.cnpj,
        company_description: company.company_description,
        company_admin: company.company_admin,
      });

      return res.status(200).send("Empresa criada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async updateCompanies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = { id: authenticationData.id };

      if (!userId.id) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }
      
      const company: CompanyReq = {
        company_name: req.body.company_name,
        cnpj: req.body.cnpj,
        company_description: req.body.company_description,
        company_admin: req.body.company_admin,
      };

      await knex("companies")
      .update({
        company_name: company.company_name,
        cnpj: company.cnpj,
        company_description: company.company_description,
        company_admin: company.company_admin,
      }).where({ id })
      return res.status(200).send("Empresa atualizada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async deleteCompanies(
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
      await knex("companies")
      .where({ id })
      .del()

      return res.status(200).send("Empresa deletada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }
}
