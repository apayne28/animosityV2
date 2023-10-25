"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AnimeRelation, AnimeRelations } from "../../AnimosityTypes";

interface AnimeInfoMainConfigProps {
  relatedAnime: any;
}

const AnimeInfoRelatedAnime = (info: any) => {
  return (
    <div>
      {info.relatedAnime.map((info: AnimeRelations) => {
        let relatedAnime = info.entry;
        let relatedAnimeType = info.relation;

        return relatedAnime.map((single: AnimeRelation) => {
          return (
            <>
              <Link
                href={{
                  pathname:
                    single.type === "anime" ? "/anime-info" : "/manga-info",
                  query: { id: single.mal_id },
                }}
              >
                <Typography className='anime-info-related-anime-item'>{`${relatedAnimeType}: ${single.name}`}</Typography>
              </Link>
            </>
          );
        });
      })}
    </div>
  );
};

export default AnimeInfoRelatedAnime;
