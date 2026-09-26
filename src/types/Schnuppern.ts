export interface SchnuppernFormRequest {
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}

export enum SchnuppernFormState {
  NotDisplayed,
  Displayed,
}
