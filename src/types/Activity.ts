export interface Activity {
  title: string;
  url: string;
  thumb: string;
}

export interface ActivityRaw {
  title: string;
  image: {
    path: string;
  };
  thumb: {
    path: string;
  };
}

export interface CockpitActivities {
  entries: ActivityRaw[];
}
