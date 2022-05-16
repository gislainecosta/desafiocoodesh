import express from "express";
import { TicketController } from "../controllers/TicketController";

const ticketRouter = express.Router();

ticketRouter.get("/", new TicketController().getTickets);
ticketRouter.post("/", new TicketController().createTickets);
ticketRouter.put("/update/:id", new TicketController().updateTickets);
ticketRouter.delete("/:id", new TicketController().deleteTickets);
ticketRouter.put("/manage/:id", new TicketController().manageTickets);

export default ticketRouter;