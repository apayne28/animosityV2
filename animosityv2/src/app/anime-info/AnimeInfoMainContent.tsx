import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AnimeInfoCharacters from "./AnimeInfoCharacters";
import AnimeInfoRecommendedAnime from "./AnimeInfoRecommendedAnime";

interface AnimeInfoMainConfigProps {
  anime: any;
  characters: any;
  recommendations: any;
}
const AnimeInfoMainContent = (anime: AnimeInfoMainConfigProps) => {
  let animeData = anime.anime;
  let relatedAnime = animeData.relations;
  console.log(anime);
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
        <div>
          {relatedAnime.map((info) => {
            let relatedAnime = info.entry;
            let relatedAnimeType = info.relation;

            return relatedAnime.map((single) => {
              return (
                <div>
                  <Link
                    href={{
                      pathname: "/anime-info",
                      query: { id: single.mal_id },
                    }}
                  >
                    <Typography className='anime-info-related-anime-item'>{`${relatedAnimeType}: ${single.name}`}</Typography>
                  </Link>
                </div>
              );
            });
          })}
        </div>
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
