import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {
  const pokemonCards = pokemonData.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        sprite={pokemon.sprites}
        hp={pokemon.hp}
      />
    );
  });

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
