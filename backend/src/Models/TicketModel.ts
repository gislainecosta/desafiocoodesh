enum TicketStatus {
  PENDENTE = "PENDENTE",
  PROGRESSO = "PROGRESSO",
  CONCLUÍDO = "CONCLUÍDO",
}

interface TicketReqCreate {
  ticket_user_admin: string;
  local_name: string;
  local_address: string;
  local_company: number;
  local_admin: string;
}

interface TicketReqUpdate {
  ticket_user_admin: string;
  local_name: string;
  local_address: string;
  local_company: number;
  local_admin: string;
}

interface TicketManage {
  status: TicketStatus
}

export { TicketReqCreate, TicketStatus, TicketReqUpdate, TicketManage };
