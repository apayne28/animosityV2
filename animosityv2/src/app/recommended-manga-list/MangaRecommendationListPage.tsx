"use client";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Recommendation } from "../../AnimosityTypes";
import styles from "../anime-info/styles.module.css";
import Link from "next/link";
import MangaInfoDetails from "../manga-info/MangaInfoDetails";

interface MangaRecommendationListProps {
  characterList?: any;
  mangaData: any;
  recommendedManga: any;
}

const MangaRecommendationListPage = (info: MangaRecommendationListProps) => {
  let windowSize = window.innerWidth;

  const [columnSize, setColumnSize] = useState<number>();
  const [rowHeight, setRowHeight] = useState<number>();
  window.addEventListener("resize", () => {
    console.log(windowSize);
    if (windowSize > 3000) {
      setColumnSize(5);
      setRowHeight(780);
    } else if (windowSize > 2048 && windowSize <= 3000) {
      setColumnSize(4);
      setRowHeight(780);
    } else if (windowSize > 1100 && windowSize <= 2048) {
      setColumnSize(4);
      setRowHeight(580);
    } else if (windowSize > 855 && windowSize <= 1100) {
      setColumnSize(3);
      setRowHeight(480);
    } else if (windowSize > 550 && windowSize <= 855) {
      setColumnSize(2);
      setRowHeight(480);
    } else if (windowSize <= 550) {
      setColumnSize(1);
      setRowHeight(580);
    }
  });

  useEffect(() => {
    if (!columnSize && !rowHeight) {
      if (windowSize > 3000) {
        setColumnSize(5);
        setRowHeight(780);
      } else if (windowSize > 2048 && windowSize <= 3000) {
        setColumnSize(4);
        setRowHeight(780);
      } else if (windowSize > 1100 && windowSize <= 2048) {
        setColumnSize(4);
        setRowHeight(580);
      } else if (windowSize > 855 && windowSize <= 1100) {
        setColumnSize(3);
        setRowHeight(480);
      } else if (windowSize > 550 && windowSize <= 855) {
        setColumnSize(2);
        setRowHeight(480);
      } else if (windowSize <= 550) {
        setColumnSize(1);
        setRowHeight(580);
      }
    }
  }, [columnSize, rowHeight, windowSize]);
  return (
    <Box data-testid='anime-info-anime-recs-list-page'>
      {/* <NavigationBar /> */}

      <Box sx={{ display: "flex", marginTop: "2%" }}>
        <div className='anime-character-list-contents'>
          {/* <AnimeInfoAnimeDetails
            animeRecList={
              animeRecommendationsList
                ? animeRecommendationsList
                : location.state.animeRecList
            }
            animeId={id}
            charList={animeCharacterList}
          /> */}
          <MangaInfoDetails
            mangaData={info.mangaData}
            mangaCharacterListData={info.characterList}
            recommendedMangaData={info.recommendedManga}
          />
          <Grid container>
            <ImageList cols={columnSize} rowHeight={rowHeight}>
              {info.recommendedManga.map((entry: Recommendation) => {
                return (
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      flexDirection: "row",

                      margin: "auto",
                      backgroundColor: "white",
                    }}
                  >
                    <Link
                      data-testid={`anime-info-anime-recs-list-page-${entry.entry.title}`}
                      href={{
                        pathname: "/manga-info",
                        query: {
                          id: entry.entry.mal_id,
                          title: entry.entry.title,
                        },
                      }}
                    >
                      <ImageListItem>
                        <Box
                          component='img'
                          src={entry.entry.images.jpg.image_url}
                          alt={entry.entry.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 1,
                          }}
                        />
                        <ImageListItemBar title={entry.entry.title} />
                      </ImageListItem>
                      <div></div>
                    </Link>
                  </Grid>
                );
              })}
            </ImageList>
          </Grid>
        </div>
      </Box>
      {/* <footer class='footer' /> */}
    </Box>
  );
};

export default MangaRecommendationListPage;
