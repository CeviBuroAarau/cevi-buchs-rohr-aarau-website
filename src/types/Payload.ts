export interface PayloadList<T> {
  docs: T[];
}

export interface PayloadUpload {
  url: string;
  title?: string | null;
  sizes?: {
    thumbnail?: {
      url: string | null;
    };
    large?: {
      url: string | null;
    };
  };
}

export interface PayloadGroup {
  name: string;
}
