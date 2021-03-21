export interface WelcomeImage {
  url: string;
}

export interface CockpitWelcomeImage {
  entries: WelcomeImageRaw[];
}

export interface WelcomeImageRaw {
  image: {
    path: string;
  };
}
