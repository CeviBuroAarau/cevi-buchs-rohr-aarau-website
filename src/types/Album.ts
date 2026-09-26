import { PayloadList, PayloadUpload } from "./Payload";

export interface AlbumPreviewImage {
  url: string;
}

export interface AlbumImage {
  title: string;
  url: string;
}

export interface Album {
  title: string;
  dateLabel: string;
  date: Date;
  year: string;
  images: AlbumImage[];
  previewImage: AlbumPreviewImage;
  downloadUrl: string;
}

export interface AlbumRaw {
  id: number;
  title: string;
  dateLabel: string;
  date: string;
  year: string;
  images: PayloadUpload[];
  previewImage: PayloadUpload;
}

export type BackendAlbums = PayloadList<AlbumRaw>;
