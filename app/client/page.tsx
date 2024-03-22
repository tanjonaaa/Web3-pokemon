"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import PokeCard from "../components/pokeCard";
import usePokemons from "../hooks/usePokemons";

export default function ClientPokemon() {
  const { pokemons } = usePokemons();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {pokemons.map((pokemon) => (
        <GridItem key={pokemon.image}>
          <PokeCard pokemon={pokemon} />
        </GridItem>
      ))}
    </Grid>
  );
}
