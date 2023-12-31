"use client";
import { Typography } from "@mui/material";
import React from "react";

import styles from "../anime-info/styles.module.css";
import MangaInfoRelatedManga from "./MangaInfoRelatedManga";
import MangaInfoCharacters from "./MangaInfoCharacters";
import MangaInfoRecommendedManga from "./MangaInfoRecommendedManga";
import Link from "next/link";
import MangaInfoDetails from "./MangaInfoDetails";

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
      <MangaInfoDetails
        mangaData={mangaData}
        mangaCharacterListData={characterData}
        recommendedMangaData={recommendedMangaData}
      />
      <div className={styles.anime_info_content_guts}>
        <div>
          <h3>Synopsis</h3>
          <Typography paragraph sx={{ whiteSpace: "pre-line" }}>
            {mangaData.synopsis}
          </Typography>
        </div>
        <div>
          <h3>Background</h3>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {mangaData.background ? mangaData.background : "N/A"}
          </Typography>
        </div>
        <div>
          <h3>Related Manga</h3>
          <MangaInfoRelatedManga relatedManga={relatedManga} />
        </div>
        <div>
          <h3>
            {" "}
            Characters{" "}
            <Link
              href={{
                pathname: "/manga-character-list",
                query: {
                  id: mangaData.mal_id,
                  title: `${mangaData.title} Characters`,
                },
              }}
            >
              View More
            </Link>
          </h3>
          <MangaInfoCharacters characters={characterData} />
        </div>
        {recommendedMangaData.length > 0 && (
          <div>
            <h3>
              Recommended Anime{" "}
              <Link
                href={{
                  pathname: "/recommended-manga-list",
                  query: {
                    id: mangaData.mal_id,
                    title: `${mangaData.title}`,
                  },
                }}
              >
                View More
              </Link>
            </h3>
            <MangaInfoRecommendedManga recommendations={recommendedMangaData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MangaInfoMainContent;
