import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AnimeInfoCharacters from "./AnimeInfoCharacters";
import AnimeInfoRecommendedAnime from "./AnimeInfoRecommendedAnime";
import AnimeInfoRelatedAnime from "./AnimeInfoRelatedAnime";

interface AnimeInfoMainConfigProps {
  anime: any;
  characters: any;
  recommendations: any;
}
const AnimeInfoMainContent = (anime: AnimeInfoMainConfigProps) => {
  let animeData = anime.anime;
  let relatedAnime = animeData.relations;

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
        <AnimeInfoCharacters characters={anime.characters} />
      </div>
      <div>
        <h3>Recommended Anime</h3>
        <AnimeInfoRecommendedAnime recommendations={anime.recommendations} />
      </div>
    </div>
  );
};

export default AnimeInfoMainContent;
