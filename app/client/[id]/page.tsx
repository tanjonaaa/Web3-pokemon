"use client";
import { Pokemon } from "@/app/types/pokemon";
import { getPokemon } from "@/app/types/util";
import {
  Stack,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SinglePokemon({ params }: { params: { id: number } }) {
  const { id } = params;
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((pokemon) => setPokemon(pokemon))
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <Stack>
      <Image
        src={pokemon?.image}
        alt={pokemon?.name}
        height={500}
        width={500}
      />
      <Heading>{pokemon?.name}</Heading>
      <UnorderedList>
        <ListItem>Taille: {pokemon?.height}</ListItem>
        <ListItem>Poids: {pokemon?.weight}</ListItem>
        <ListItem>
          Types: {pokemon?.types.map((type) => `${type.name} `)}
        </ListItem>
        <ListItem>Numéro: {pokemon?.order}</ListItem>
      </UnorderedList>
    </Stack>
  );
}
