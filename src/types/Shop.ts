import { PayloadList, PayloadUpload } from "./Payload";

export interface ShopFormRequest {
  name: string;
  email: string;
  articles: string;
  deliveryMethod: string;
  adress: string;
}

export interface Article {
  categories: string[];
  file: string;
  name: string;
  description: string;
  price: string;
}

export interface ArticlesRaw {
  category: string[];
  image: PayloadUpload;
  name: string;
  description: string;
  price: string;
}

export type BackendArticles = PayloadList<ArticlesRaw>;

export enum LaedeliFormState {
  NotDisplayed,
  Displayed,
}
