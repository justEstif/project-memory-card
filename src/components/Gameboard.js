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

const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
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
  const getMovies = () => {
    const movies = [];
    for (let i = 0; i < posters.length; i++) {
      movies.push({ poster: posters[i], caption: captions[i] });
    }
    return movies;
  };
  const movies = getMovies();

  const getFrames = () => {
    return getShuffledArr(movies).map((movie, idx) => (
      <React.Fragment key={idx}>
        <Frame
          idx={idx}
          poster={movie.poster}
          caption={movie.caption}
          handleClick={handleClick}
        />
      </React.Fragment>
    ));
  };

  let clicked = [];
  const handleClick = (idx) => {
    console.log(movies);
    if (clicked.includes(idx)) {
      console.log("end");
      clicked = [];
    } else {
      clicked.push(idx);
      console.log("next");
    }
  };

  // const { clicked } = props;
  // const [frames, setFrames] = useState();

  return <div className="grid-container">{getFrames()}</div>;
}
