import { Request, Response, NextFunction } from "express";
import { CompanyReq } from "../Models/Company"

const knex = require("../database");

export class CompanyController {
  async getCompanies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
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

      res.status(200).send("Empresa criada com sucesso!");
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
      res.status(200).send("Empresa atualizada com sucesso!");
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
      
      await knex("companies")
      .where({ id })
      .del()

      res.status(200).send("Empresa deletada com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }
}
