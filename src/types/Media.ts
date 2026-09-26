import { PayloadList, PayloadUpload } from "./Payload";

export interface Media {
  type: string;
  date: Date;
  description: string;
  file: string;
}

export interface MediaRaw {
  type: string;
  date: string;
  descriptionHtml: string;
  file: PayloadUpload;
}

export type BackendMedia = PayloadList<MediaRaw>;
