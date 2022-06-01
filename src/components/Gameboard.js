import django from "./img/django.jpg"
import fightClub from "./img/fightClub.png"
import gladiator from "./img/gladiator.png"
import homeAlone from "./img/homeAlone.jpg"
import inception from "./img/inception.jpg"
import joker from "./img/joker.png"
import noTimeToDie from './img/noTimeToDie.png'
import taxiDriver from "./img/taxiDriver.png"
import theLoR from "./img/theLoR.jpg"

import "./styles/Gameboard.css"

import React, { useState } from "react";
import Frame from "./Frame";

export default function Gameboard(props) {
  // const { clicked } = props;
  // const [frames, setFrames] = useState();
  return (
    <div className="grid-container">
      <Frame picture={django} caption={"Django Unchained"} />
      <Frame picture={fightClub} caption={"Fight Club"} />
      <Frame picture={gladiator} caption={"Gladiator"} />
      <Frame picture={homeAlone} caption={"Home Alone"} />
      <Frame picture={inception} caption={"Inception"} />
      <Frame picture={joker} caption={"Joker"} />
      <Frame picture={noTimeToDie} caption={"No Time to Die"} />
      <Frame picture={taxiDriver} caption={"Taxi Driver"} />
      <Frame picture={theLoR} caption={"The Lord of the Rings"} />
    </div>
  );
}
