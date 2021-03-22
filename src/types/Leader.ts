export interface Leader {
  name: string;
  scoutname: string;
  function: string[];
  group: string;
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScountsSince: string;
  inScoutsBecause: string;
  bestExperiences: string;
  file: string;
}

export interface CockpitLeaders {
  entries: LeaderRaw[];
}

export interface LeaderRaw {
  name: string;
  scoutname: string;
  function: string[];
  group: string;
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScountsSince: string;
  inScoutsBecause: string;
  bestExperiences: string;
  image: {
    path: string;
  };
}
