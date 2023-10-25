"use client";
import { Typography } from "@mui/material";
import React from "react";
import AnimeInfoCharacters from "./AnimeInfoCharacters";
import AnimeInfoRecommendedAnime from "./AnimeInfoRecommendedAnime";
import AnimeInfoRelatedAnime from "./AnimeInfoRelatedAnime";
import styles from "./styles.module.css";
import ReactPlayer from "react-player";
import Link from "next/link";

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

  return (
    <div className={styles.anime_info_main_content_container}>
      {animeData.trailer.url && (
        <div>
          {/* <a href={info.trailer.url} target='_blank' rel='noreferrer'>
            <img
              className='anime-info-promo-image'
              src={info.trailer.images.small_image_url}
              alt={`${info.title}`}
            />
          </a> */}
          <ReactPlayer
            url={animeData.trailer.url}
            style={{ display: "flex", margin: "auto", marginTop: "1%" }}
          />
        </div>
      )}
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
        <h3>
          Characters{" "}
          <Link
            href={{
              pathname: "/anime-character-list",
              query: {
                id: animeData.mal_id,
                title: `${animeData.title} Characters`,
              },
            }}
          >
            View More
          </Link>
        </h3>

        <AnimeInfoCharacters characters={characterData} />
      </div>
      {recommendedAnimeData.length > 0 && (
        <div>
          <h3>Recommended Anime</h3>
          <AnimeInfoRecommendedAnime recommendations={recommendedAnimeData} />
        </div>
      )}
    </div>
  );
};

export default AnimeInfoMainContent;
