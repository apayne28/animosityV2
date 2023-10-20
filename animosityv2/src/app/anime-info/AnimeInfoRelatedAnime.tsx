import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface AnimeInfoMainConfigProps {
  relatedAnime: any;
}

const AnimeInfoRelatedAnime = (info: any) => {
  return (
    <div>
      {info.relatedAnime.map((info) => {
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
  );
};

export default AnimeInfoRelatedAnime;
