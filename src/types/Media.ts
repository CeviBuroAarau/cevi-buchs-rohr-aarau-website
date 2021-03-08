export interface Media {
  type: string;
  date: Date;
  description: string;
  file: string;
}

export interface CockpitMedia {
  entries: Media[];
}
