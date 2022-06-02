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
import Frame from "./Frame";

import React, { useEffect, useState } from "react";

const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const getMovies = () => {
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
  const movies = [];
  for (let i = 0; i < posters.length; i++) {
    movies.push({
      id: i,
      poster: posters[i],
      caption: captions[i],
    });
  }
  return movies;
};


export default function Gameboard({ changeScore, reset, changeBest }) {
  let movies = getMovies();
  let clicked = []
  let best = 0
  const getFrames = () => {
    return getShuffledArr(movies).map((movie) => (
      <React.Fragment key={movie.id}>
        <Frame
          idx={movie.id}
          poster={movie.poster}
          caption={movie.caption}
          handleClick={handleClick}
        />
      </React.Fragment>
    ));
  };

  useEffect(() => { }, [movies]);

  const handleClick = (id) => {

    if (clicked.includes(movies[id]) || clicked.length >= movies.length) {
      if (clicked.length >= best) {
        best = clicked.length
        changeBest(best)
      }
      reset()
      clicked = []
      movies = getMovies()
      setFrames(getFrames());
    }
    else {
      clicked.push(movies[id])
      changeScore(clicked.length)
      setFrames(getFrames());
    }
  };
  const [frames, setFrames] = useState(getFrames());

  return <div className="grid-container">{frames}</div>;
}
