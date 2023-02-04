import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemonData, setPokemonData] = useState([]);
const [search, setSearch] = useState(""); //starts w empty string
//useState returns an array  in this case. starting w empty array///

  useEffect(() => {
    fetch ("http://localhost:3001/pokemon")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then (data => setPokemonData(data)) //pass data into setPokemonData function//
  }, []);

  const pokemonFilteredArray = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase()) //includes means anything being typed in will filter the pokemon with the names
  });
  console.log(pokemonFilteredArray)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonData = {pokemonData} />
    </Container>
  );
}

export default PokemonPage;
