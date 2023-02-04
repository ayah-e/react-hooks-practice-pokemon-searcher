import React, { useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, sprite, hp}) {

  const [isToggle, setIsToggle] = useState(true);
  function handleToggle() { 
    setIsToggle(!isToggle);
  };

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src = {isToggle ? sprite.front : sprite.back} onClick = {handleToggle}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
