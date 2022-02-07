export interface Leader {
  name: string;
  isactive: boolean;
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
  isactive: boolean;
  scoutname: string;
  function: string[];
  group: {
    display: string;
  };
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScoutsSince: string;
  inScoutsBecause: string;
  bestExperiences: string;
  image: {
    path: string;
  };
}

export interface CockpitLeaders {
  entries: LeaderRaw[];
}
