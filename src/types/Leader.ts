export interface Leader {
  scoutname: string;
  function: string;
  group: string;
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScoutsSince: string;
  inScoutsBecause: string;
  bestExperience: string;
  file: string;
}

export interface CockpitLeaders {
  entries: LeaderRaw[];
}

export interface LeaderRaw {
  scoutname: string;
  function: string;
  group: string;
  birthyear: string;
  place: string;
  profession: string;
  recreation: string;
  inScoutsSince: string;
  inScoutsBecause: string;
  bestExperience: string;
  image: {
    path: string;
  };
}
