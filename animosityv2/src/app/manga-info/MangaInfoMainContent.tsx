"use client";
import { Typography } from "@mui/material";
import React from "react";

import styles from "../anime-info/styles.module.css";
import MangaInfoRelatedManga from "./MangaInfoRelatedManga";
import MangaInfoCharacters from "./MangaInfoCharacters";
import MangaInfoRecommendedManga from "./MangaInfoRecommendedManga";

interface MangaInfoMainConfigProps {
  mangaData: any;
  mangaCharacterListData: any;
  recommendedMangaData: any;
}
const MangaInfoMainContent = (info: MangaInfoMainConfigProps) => {
  let mangaData = info.mangaData;
  let relatedManga = info.mangaData.relations;
  let characterData = info.mangaCharacterListData;
  let recommendedMangaData = info.recommendedMangaData;

  return (
    <div className={styles.anime_info_main_content_container}>
      <div>
        <h3>Synopsis</h3>
        <Typography paragraph>{mangaData.synopsis}</Typography>
      </div>
      <div>
        <h3>Background</h3>
        <Typography>
          {mangaData.background ? mangaData.background : "N/A"}
        </Typography>
      </div>
      <div>
        <h3>Related Manga</h3>
        <MangaInfoRelatedManga relatedManga={relatedManga} />
      </div>
      <div>
        <h3>Characters</h3>
        <MangaInfoCharacters characters={characterData} />
      </div>
      {recommendedMangaData.length > 0 && (
        <div>
          <h3>Recommended Anime</h3>
          <MangaInfoRecommendedManga recommendations={recommendedMangaData} />
        </div>
      )}
    </div>
  );
};

export default MangaInfoMainContent;
