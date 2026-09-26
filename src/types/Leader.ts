import { PayloadGroup, PayloadList, PayloadUpload } from "./Payload";

export interface Leader {
  name: string;
  isActive: boolean;
  scoutname: string;
  function: string[];
  group: string;
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScoutsSince: string;
  inScoutsBecause: string;
  bestExperiences: string;
  file: string;
}

export interface LeaderRaw {
  name: string;
  isActive: boolean;
  scoutname: string;
  function: string[];
  group: PayloadGroup | null;
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScoutsSince: string;
  inScoutsBecause: string;
  bestExperiences: string;
  image: PayloadUpload;
}

export type BackendLeaders = PayloadList<LeaderRaw>;
