export enum TAG_TYPES {
  rickAndMorty = "RickAndMorty"
}

export interface CharaterInfo {
  count: number;
  next: string;
  pages: number;
  prev: number;
}

export interface CharaterResult {
  id: number;
  name: string;
  status: string;
}

export interface CharacterResponse {
  info: CharaterInfo;
  results: CharaterResult[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
