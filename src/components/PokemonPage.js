import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemonData, setPokemonData] = useState([]);
//useState returns an array  in this case. starting w empty array///

  useEffect(() => {
    fetch ("http://localhost:3001/pokemon")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then (data => setPokemonData(data)) //pass data into setPokemonData function//
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
    </Container>
  );
}

export default PokemonPage;
