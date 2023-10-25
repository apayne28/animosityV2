"use client";

import { ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import Link from "next/link";
import Image from "next/image";
import { MangaEntry } from "../../AnimosityTypes";

interface MangaInfoMainConfigProps {
  recommendations: any;
}
const MangaInfoRecommendedManga = (info: MangaInfoMainConfigProps) => {
  let mangaRecommendationsList = info.recommendations;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 855, itemsToShow: 3, itemsToScroll: 3 },

    { width: 1100, itemsToShow: 4, itemsToScroll: 4 },
    { width: 2081, itemsToShow: 6, itemsToScroll: 6 },

    { width: 3008, itemsToShow: 8, itemsToScroll: 8 },
  ];

  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {mangaRecommendationsList.map((info: MangaEntry) => {
          let recManga = info.entry;

          return (
            <div>
              <ImageList cols={1} rowHeight={400}>
                <ImageListItem>
                  <Link
                    href={{
                      pathname: "/manga-info",
                      query: { id: recManga.mal_id, title: recManga.title },
                    }}
                  >
                    <Image
                      src={recManga.images.jpg.image_url}
                      alt={recManga.title}
                      height={400}
                      width={300}
                    />

                    <ImageListItemBar
                      title={recManga.title}
                      sx={{ borderRadius: 1 }}
                    />
                  </Link>
                </ImageListItem>
              </ImageList>

              {/* <Typography>{recAnime.title}</Typography> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MangaInfoRecommendedManga;
