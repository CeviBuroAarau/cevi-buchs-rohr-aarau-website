import { PayloadList, PayloadUpload } from "./Payload";

export interface Activity {
  title: string;
  url: string;
  thumb: string;
}

export interface ActivityRaw {
  title: string;
  image: PayloadUpload;
}

export type BackendActivities = PayloadList<ActivityRaw>;
