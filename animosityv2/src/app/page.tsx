import Image from "next/image";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Mainpage } from "./components/Mainpage";
import MainpageCarousel from "./components/MainpageCarousel";
import MainpageContents from "./components/MainpageContents";

const getCurrentSeason = () => {
  // It's plus one because January is index 0
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month > 3 && month < 6) {
    return "spring";
  }

  if (month > 6 && month < 9) {
    return "summer";
  }

  if (month > 9 && month < 12) {
    return "fall";
  }

  if (month >= 1 && month < 3) {
    return "winter";
  }

  const day = now.getDate();
  if (month === 3) {
    return day < 22 ? "winter" : "spring";
  }

  if (month === 6) {
    return day < 22 ? "spring" : "summer";
  }

  if (month === 9) {
    return day < 22 ? "summer" : "fall";
  }

  if (month === 12) {
    return day < 22 ? "fall" : "winter";
  }

  console.error("Unable to calculate current season");
};

const d = new Date();

let currentYear = d.getFullYear();
let currentSeason = getCurrentSeason();

const getNextSeason = () => {
  let nextSeason = "";

  if (currentSeason === "fall") {
    nextSeason = "winter";
  } else if (currentSeason === "winter") {
    nextSeason = "spring";
  } else if (currentSeason === "spring") {
    nextSeason = "summer";
  } else if (currentSeason === "summer") {
    nextSeason = "fall";
  }
  return nextSeason;
};

const nextAnimeSeason = getNextSeason(currentSeason);

async function getCurrentSeasonAnime() {
  try {
    const currentSeasonTemp = await fetch(
      `https://api.jikan.moe/v4/seasons/${currentYear}/${currentSeason}`
    ).then((res) => res.json());

    return currentSeasonTemp.data;
  } catch (error) {
    console.log(`${currentSeason} Anime list not found`);
  }
}

async function getUpcomingSeasonAnime() {
  try {
    const upcomingSeasonTemp = await fetch(
      `https://api.jikan.moe/v4/seasons/${
        nextAnimeSeason === "winter" ? currentYear + 1 : currentYear
      }/${nextAnimeSeason}`
    ).then((res) => res.json());

    return upcomingSeasonTemp.data;
  } catch (error) {
    console.log(`${nextAnimeSeason} Anime not found`);
  }
}
export default async function Home() {
  // const jikanjs = require("@mateoaranda/jikanjs");

  // let yor = await jikanjs.loadCharacter(170329);

  let currentAnimeData = getCurrentSeasonAnime();
  let upcomingAnimeData = getUpcomingSeasonAnime();

  const [currentAnimeSeason, upcomingAnimeSeason] = await Promise.all([
    currentAnimeData,
    upcomingAnimeData,
  ]);
  return (
    <div>
      {/* <Mainpage /> */}
      <MainpageCarousel />
      <MainpageContents
        currentAnimeSeason={currentAnimeSeason}
        upcomingAnimeSeason={upcomingAnimeSeason}
        currentYear={currentYear}
        currentSeason={currentSeason}
        upcomingSeason={nextAnimeSeason}
      />
    </div>
  );
}
