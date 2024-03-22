import axios from "axios";
import { PokeDataResult, Pokemon } from "../types/pokemon";
import { getPokemon } from "../types/util";
import { Heading, Stack } from "@chakra-ui/react";

export default async function ServerPokemon() {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );

  const pokemons: Pokemon[] = await Promise.all(
    data.results.map(
      async (result: PokeDataResult) => await getPokemon(result.url)
    )
  );

  return <></>;
}
