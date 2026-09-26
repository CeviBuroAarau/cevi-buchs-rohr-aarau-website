import { PayloadList, PayloadUpload } from "./Payload";

export interface WelcomeImage {
  url: string;
}

export interface WelcomeImageRaw {
  image: PayloadUpload;
}

export type BackendWelcomeImages = PayloadList<WelcomeImageRaw>;
