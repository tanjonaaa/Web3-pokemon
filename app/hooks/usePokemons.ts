import { useEffect, useState } from "react";
import { PokeDataResult, Pokemon, PokeType } from "../types/pokemon";
import axios from "axios";
import { getPokemon } from "../types/util";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then(({ data }) => {
        data.results.forEach((element: PokeDataResult) => {
          getPokemon(element.url).then((pokemon) =>
            setPokemons((prev) => prev.concat(pokemon))
          );
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return { pokemons, setPokemons };
}
