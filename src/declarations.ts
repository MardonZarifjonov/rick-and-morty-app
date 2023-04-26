export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type CharacterOrigin = DeepPartial<{
  name: string;
  url: string;
}>;

export type CharacterLocation = DeepPartial<{
  name: string;
  url: string;
}>;

// export type CharacterEpisode = DeepPartial<{
//   name: string;
//   url: string;
// }>;

export type Character = DeepPartial<{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  episode: string[];
}>;

export type CharacterListResponse = DeepPartial<{
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
}>;

export type CharacterListParams = DeepPartial<{
  name: string;
  page: number;
}>;
