export interface SchnuppernFormRequest {
  form: {
    name: string;
    email: string;
    phonenumber: string;
    message: string;
  };
}

export interface SchnuppernFormResponse {
  error: string;
  data: {
    name: string;
    email: string;
    phonenumber: string;
    message: string;
  };
}

export enum SchnuppernFormState {
  NotDisplayed,
  Displayed,
}
