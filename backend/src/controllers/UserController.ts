import { Request, Response, NextFunction } from "express";
import { UserReq, UserLogin } from "../Models/UserModel";
import IdGenerator from '../services/IdGen.class';
import HashManager from '../services/HashManager.class';
import Authenticator from '../services/Authenticator.class';

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
      if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.password ||
        !req.body.phone
      ) {
        throw new Error("Invalid input");
      }
      if (req.body.email.indexOf("@") === -1) {
        throw new Error("Invad email address");
      }
      if (req.body.password.length < 6) {
        throw new Error("Invalid password lenght");
      }

      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();

      const user: UserReq = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password,
      };

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(user.password);

      await knex("users").insert({
        id: id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        password: hashPassword,
      });

      const authenticator = new Authenticator();
      const accessToken = authenticator.generateToken({ id }, "400min");

      return res.status(200).send({ access_token: accessToken });
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
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password,
      };

      await knex("users")
        .update({
          name: user.name,
          email: user.email,
          address: user.address,
          phone: user.phone,
          password: user.password,
        })
        .where({ id });
      return res.status(200).send("Usuário atualizado com sucesso!");
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

      return res.status(200).send("Usuário deletado com sucesso!");
    } catch (e: any) {
      next(e);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      if (!req.body.email || 
        req.body.email.indexOf("@") === -1 ||
        !req.body.password ||
        req.body.password.lenght < 6
      ) {
        throw new Error("Invalid credentials");
      }

      const userData: UserLogin = {
        email: req.body.email,
        password: req.body.password,
      };

      const hashManager = new HashManager();
      
      const user = await knex("users").where({ email: userData.email });
      
      const correctPassword = await hashManager.compare(
        userData.password,
        user[0].password
      );

      if (!correctPassword) {
        throw new Error("Invalid password");
      }

      const authenticator = new Authenticator();
      const accessToken = authenticator.generateToken({ id:user[0].id }, "400min");

      return res
        .status(200)
        .send({access_token: accessToken});


    } catch (e: any) {
      next(e);
    }
  }
}
