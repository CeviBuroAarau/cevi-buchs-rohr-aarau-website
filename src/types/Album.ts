export interface AlbumPreviewImage {
  url: string;
}

export interface AlbumImage {
  title: string;
  url: string;
}

export interface Album {
  title: string;
  dateString: string;
  date: Date;
  year: number;
  images: AlbumImage[];
  previewImage: AlbumPreviewImage;
}

export interface CockpitAlbumImage {
  meta: {
    title: string;
    asset: string;
  };
  path: string;
}

export interface CockpitAlbumPreviewImage {
  path: string;
}

export interface CockpitAlbumEntry {
  title: string;
  dateString: string;
  date: Date;
  year: number;
  images: CockpitAlbumImage[];
  previewImage: CockpitAlbumPreviewImage;
}

export interface CockpitAlbum {
  entries: CockpitAlbumEntry[];
}
