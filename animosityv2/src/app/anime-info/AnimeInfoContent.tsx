"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { Box, Divider, Typography } from "@mui/material";
import "./anime-info.css";
import AnimeInfoSideContent from "./AnimeInfoSideContent";
import AnimeInfoMainContent from "./AnimeInfoMainContent";

const AnimeInfoContent = async () => {
  const jikanjs = require("@mateoaranda/jikanjs");
  const searchParams = useSearchParams();
  let id = searchParams.get("id");

  // let anime = await jikanjs.loadAnime(5514, "full");

  //Grabs Anime Info
  const animeTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/full`
  ).then((res) => res.json());
  let anime = animeTemp.data;

  const characterTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/characters`
  ).then((res) => res.json());

  let characterData = characterTemp.data;

  let recommendedAnimeTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/recommendations`
  ).then((res) => res.json());
  let recommendedAnimeData = recommendedAnimeTemp.data;

  return (
    anime && (
      <div className='anime-info-content-container'>
        <AnimeInfoSideContent anime={anime} />

        <AnimeInfoMainContent
          anime={anime}
          characters={characterData}
          recommendations={recommendedAnimeData}
        />
      </div>
    )
  );
};

export default AnimeInfoContent;
