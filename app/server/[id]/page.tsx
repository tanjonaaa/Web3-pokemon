import { Pokemon } from "@/app/types/pokemon";
import { getPokemon } from "@/app/types/util";
import {
  Stack,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default async function SinglePokemon({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;

  const pokemon: Pokemon = await getPokemon(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

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
