import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AnimeInfoCharacters from "./AnimeInfoCharacters";
import AnimeInfoRecommendedAnime from "./AnimeInfoRecommendedAnime";
import AnimeInfoRelatedAnime from "./AnimeInfoRelatedAnime";

interface AnimeInfoMainConfigProps {
  id: string | null;
}
const AnimeInfoMainContent = async (info: AnimeInfoMainConfigProps) => {
  const animeTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${info.id}/full`
  ).then((res) => res.json());

  let animeData = animeTemp.data;
  let relatedAnime = animeData.relations;

  const characterTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${info.id}/characters`
  ).then((res) => res.json());

  let characterData = characterTemp.data;

  let recommendedAnimeTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${info.id}/recommendations`
  ).then((res) => res.json());
  let recommendedAnimeData = recommendedAnimeTemp.data;

  return (
    <div className='anime-info-main-content-container'>
      <div>
        <h3>Synopsis</h3>
        <Typography paragraph>{animeData.synopsis}</Typography>
      </div>
      <div>
        <h3>Background</h3>
        <Typography>
          {animeData.background ? animeData.background : "N/A"}
        </Typography>
      </div>
      <div>
        <h3>Related Anime</h3>
        <AnimeInfoRelatedAnime relatedAnime={relatedAnime} />
      </div>
      <div>
        <h3>Characters</h3>
        <AnimeInfoCharacters characters={characterData} />
      </div>
      <div>
        <h3>Recommended Anime</h3>
        <AnimeInfoRecommendedAnime recommendations={recommendedAnimeData} />
      </div>
    </div>
  );
};

export default AnimeInfoMainContent;
