import express from "express";
import { TicketController } from "../controllers/TicketController";

const ticketRouter = express.Router();

ticketRouter.get("/", new TicketController().getTickets);

export default ticketRouter;