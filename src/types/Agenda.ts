export interface Agenda {
  title: string;
  text: string;
  date: Date;
}

export interface CockpitAgenda {
  entries: Agenda[];
}

export interface EventInfo {
  scope: string;
  text: string;
  date: Date;
}

export interface CockpitEventInfo {
  entries: EventInfo[];
}
