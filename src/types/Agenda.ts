import { PayloadGroup, PayloadList } from "./Payload";

export interface Agenda {
  title: string;
  text: string;
  date: Date;
}

export interface AgendaRaw {
  title: string;
  textHtml: string;
  date: string;
}

export type BackendAgenda = PayloadList<AgendaRaw>;

export interface EventInfoRaw {
  group: PayloadGroup | null;
  textHtml: string;
  date: string;
}

export interface EventInfo {
  scope: string;
  text: string;
  date: Date;
}

export type BackendEventInfos = PayloadList<EventInfoRaw>;
