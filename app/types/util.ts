import axios from "axios";
import { PokeDataResult, PokeType, Pokemon } from "./pokemon";

interface TypeWithSlot {
  slot: number;
  type: PokeType;
}

export const getPokemon = async (url: string): Promise<Pokemon> => {
  const { data } = await axios.get(url);
  const types: PokeType[] = data.types.map((type: TypeWithSlot) => type.type);

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    types: types,
    order: data.order,
  };

  return pokemon;
};
