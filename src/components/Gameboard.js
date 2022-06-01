import django from "./img/django.jpg";
import fightClub from "./img/fightClub.png";
import forrestGump from "./img/forrestGump.jpg";
import gladiator from "./img/gladiator.png";
import homeAlone from "./img/homeAlone.jpg";
import inception from "./img/inception.jpg";
import joker from "./img/joker.png";
import noTimeToDie from "./img/noTimeToDie.png";
import parasite from "./img/parasite.jpg";
import taxiDriver from "./img/taxiDriver.png";
import theLoR from "./img/theLoR.jpg";
import theRevenant from "./img/theRevenant.png";

import "./styles/Gameboard.css";

import React, { useState } from "react";
import Frame from "./Frame";

export default function Gameboard(props) {
  const posters = [
    django,
    fightClub,
    forrestGump,
    gladiator,
    homeAlone,
    inception,
    joker,
    noTimeToDie,
    parasite,
    taxiDriver,
    theLoR,
    theRevenant,
  ];
  const captions = [
    "Django Unchained",
    "Fight Club",
    "Forrest Gump",
    "Gladiator",
    "Home Alone",
    "Inception",
    "Joker",
    "No Time to Die",
    "Parasite",
    "Taxi Driver",
    "The Lord of The Rings",
    "The Revenant",
  ];
  const getFrames = () => {
    return posters.map((poster, idx) => (
      <React.Fragment key={idx}>
        <Frame idx={idx} poster={poster} caption={captions[idx]} handleClick={handleClick} />
      </React.Fragment>
    ));
  };

  const clicked = []
  const handleClick = (idx) => {
    console.log(idx)
  }

  // const { clicked } = props;
  // const [frames, setFrames] = useState();

  return (
    <div className="grid-container">
      {getFrames()}
    </div>
  );
}
