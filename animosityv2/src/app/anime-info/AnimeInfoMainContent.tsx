"use client";
import { Typography } from "@mui/material";
import React from "react";
import AnimeInfoCharacters from "./AnimeInfoCharacters";
import AnimeInfoRecommendedAnime from "./AnimeInfoRecommendedAnime";
import AnimeInfoRelatedAnime from "./AnimeInfoRelatedAnime";
import styles from "./styles.module.css";

interface AnimeInfoMainConfigProps {
  animeData: any;
  animeCharacterListData: any;
  recommendedAnimeData: any;
}
const AnimeInfoMainContent = (info: AnimeInfoMainConfigProps) => {
  let animeData = info.animeData;
  let relatedAnime = info.animeData.relations;
  let characterData = info.animeCharacterListData;
  let recommendedAnimeData = info.recommendedAnimeData;
  console.log(recommendedAnimeData);
  return (
    <div className={styles.anime_info_main_content_container}>
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
