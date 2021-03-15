export interface KontaktFormRequest {
  form: {
    name: string;
    email: string;
    message: string;
  };
}

export interface KontaktFormResponse {
  error: string;
  data: {
    name: string;
    email: string;
    message: string;
  };
}
