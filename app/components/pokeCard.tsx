import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { Pokemon } from "../types/pokemon";
import Link from "next/link";

type PokemonProps = Pokemon;

export default function PokeCard({ pokemon }: { pokemon: PokemonProps }) {
  const { id, name, image, height, weight, types, order } = pokemon;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        src={image}
        alt={pokemon.name}
        objectFit="cover"
        w={{ base: "50%" }}
      />
      <Stack>
        <CardBody>
          <Heading size="md">
            <Link href={`/client/${id}`}>{name}</Link>
          </Heading>
          <Link href={`/client/${id}`}>
            <Button variant="solid" colorScheme="blue">
              Détails
            </Button>
          </Link>
        </CardBody>
      </Stack>
    </Card>
  );
}
