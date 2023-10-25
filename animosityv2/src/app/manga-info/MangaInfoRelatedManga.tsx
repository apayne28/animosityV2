"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MangaRelation, MangaRelations } from "../../AnimosityTypes";

interface MangaInfoMainConfigProps {
  relatedManga: any;
}

const MangaInfoRelatedManga = (info: any) => {
  return (
    <div>
      {info.relatedManga.map((info: MangaRelations) => {
        let relatedManga = info.entry;
        let relatedMangaType = info.relation;

        return relatedManga.map((single: MangaRelation) => {
          return (
            <>
              <Link
                href={{
                  pathname:
                    single.type === "anime" ? "/anime-info" : "/manga-info",
                  query: { id: single.mal_id },
                }}
              >
                <Typography className='anime-info-related-anime-item'>{`${relatedMangaType}: ${single.name}`}</Typography>
              </Link>
            </>
          );
        });
      })}
    </div>
  );
};

export default MangaInfoRelatedManga;
