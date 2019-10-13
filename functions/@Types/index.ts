export declare interface Genre {
  key: string;
  label: string;
}

export declare interface Artist {
  key: string;
  label: string;
  photoUrl?: string;
}

export declare interface ArtistWtihUsers extends Artist {
  users: string[];
}
