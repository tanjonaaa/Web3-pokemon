export interface Pokemon {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: PokeType[];
  order: number;
}

export interface PokeType {
  name: string;
  url: string;
}

export interface PokeDataResult {
  name: string;
  url: string;
}
