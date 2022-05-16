import { Request, Response, NextFunction } from "express";
import { TicketReqCreate, TicketReqUpdate, TicketManage } from "../Models/TicketModel";
import Authenticator from "../services/Authenticator.class";
import IdGenerator from "../services/IdGen.class";

const knex = require("../database");

export class TicketController {
  async getTickets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = authenticationData.id;

      if (!userId) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const results = await knex("tickets");
      return res.json(results);
    } catch (e: any) {
      next(e);
    }
  }

  async createTickets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      if (
        !req.body.ticket_user_admin ||
        !req.body.local_name ||
        !req.body.local_address ||
        !req.body.local_company ||
        !req.body.local_admin
      ) {
        throw new Error("Invalid input");
      }

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = authenticationData.id;

      if (!userId) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const ticket: TicketReqCreate = {
        ticket_user_admin: req.body.ticket_user_admin,
        local_name: req.body.local_name,
        local_address: req.body.local_address,
        local_company: req.body.local_company,
        local_admin: req.body.local_admin,
      };

      const idGenerator = new IdGenerator();
      const ticketId = idGenerator.generateId();

      await knex("tickets").insert({
        id: ticketId,
        title: ticketId + ticket.local_name,
        author: userId,
        ticket_user_admin: ticket.ticket_user_admin,
        local_name: ticket.local_name,
        local_address: ticket.local_address,
        local_company: ticket.local_company,
        local_admin: ticket.local_admin,
      });

      return res.status(200).send("Ticket criado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async updateTickets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      if (
        !req.body.created_at ||
        !req.body.author ||
        !req.body.ticket_user_admin ||
        !req.body.status ||
        !req.body.local_id ||
        !req.body.local_name ||
        !req.body.local_address ||
        !req.body.local_company ||
        !req.body.local_admin
      ) {
        throw new Error("Invalid input");
      }

      const { id } = req.params;

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = authenticationData.id;

      if (!userId) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const ticket: TicketReqUpdate = {
        ticket_user_admin: req.body.ticket_user_admin,
        local_name: req.body.local_name,
        local_address: req.body.local_address,
        local_company: req.body.local_company,
        local_admin: req.body.local_admin
      };

      await knex("tickets")
        .update({
          title: id + ticket.local_name,
          ticket_user_admin: ticket.ticket_user_admin,
          local_name: ticket.local_name,
          local_address: ticket.local_address,
          local_company: ticket.local_company,
          local_admin: ticket.local_admin,
        })
        .where({ id });
      return res.status(200).send("Ticket atualizado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async deleteTickets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = req.params;

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = authenticationData.id;

      if (!userId) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }
      await knex("tickets").where({ id }).del();

      return res.status(200).send("Ticket deletado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async manageTickets(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {          
      if (!req.body.status) {
        throw new Error("Invalid input");
      }

      const { id } = req.params; 

      const token = req.headers.authorization as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
      const userId = authenticationData.id;

      if (!userId) {
        res.status(400).send({ message: "Insira um Token Válido" });
      }

      const ticketAdmin = await knex("tickets")
        .select(["ticket_user_admin"])
        .where({ id });
      
      if (userId !== ticketAdmin[0].ticket_user_admin) {
        throw new Error("Você não tem permissão para isso");
      }

      const ticket: TicketManage = {
        status: req.body.status
      };

      await knex("tickets")
        .update({
          status: ticket.status,
          updated_at: new Date()
        })
        .where({ id });
      return res.status(200).send("Ticket atualizado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }
}
