import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handlePost }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  ///added handle functions so we can update new pokemon////
  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);
  }

  function handleHpChange(e) {
    const value = e.target.value;
    setHp(value);
  }

  function handleFrontUrlChange(e) {
    setFrontUrl(e.target.value);
  }

  function handleBackUrlChange(e) {
    setBackUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPokemon = {
      ///recreate new object match the db.json////
      name: name,
      hp: parseInt(hp),
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((response) => handlePost(response));

    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            value={name}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleNameChange}
          />
          <Form.Input
            value={hp}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleHpChange}
          />
          <Form.Input
            value={frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontUrlChange}
          />
          <Form.Input
            value={backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
