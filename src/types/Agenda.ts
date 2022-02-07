export interface Agenda {
  title: string;
  text: string;
  date: Date;
}

export interface CockpitAgenda {
  entries: Agenda[];
}

export interface CockpitScope {
  display: string;
}

export interface CockpitEventInfo {
  scope: CockpitScope;
  text: string;
  date: Date;
}

export interface EventInfo {
  scope: string;
  text: string;
  date: Date;
}

export interface CockpitEventInfos {
  entries: CockpitEventInfo[];
}
