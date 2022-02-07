export interface WelcomeImage {
  url: string;
}

export interface WelcomeImageRaw {
  image: {
    path: string;
  };
}

export interface CockpitWelcomeImage {
  entries: WelcomeImageRaw[];
}
