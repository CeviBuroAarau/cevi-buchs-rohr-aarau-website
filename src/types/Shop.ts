export interface ShopFormRequest {
  form: {
    name: string;
    email: string;
    articles: string;
    deliveryMethod: string;
    adress: string;
  };
}

export interface ShopFormResponse {
  error: string;
  data: {
    name: string;
    email: string;
    articles: string;
    deliveryMethod: string;
    adress: string;
  };
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
  image: {
    path: string;
  };
  name: string;
  description: string;
  price: string;
}

export interface CockpitArticles {
  entries: ArticlesRaw[];
}

export enum LaedeliFormState {
  NotDisplayed,
  Displayed,
}
