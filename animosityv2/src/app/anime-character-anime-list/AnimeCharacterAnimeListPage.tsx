"use client";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimeCharacterFull } from "../../AnimosityTypes";
import styles from "../anime-info/styles.module.css";
import Link from "next/link";
import CharacterDetails from "../anime-character-page/CharacterDetails";
import Image from "next/image";

interface AnimeCharacterProps {
  character: any;
}

const AnimeCharacterAnimeListPage = (info: AnimeCharacterProps) => {
  const animeCharacter: AnimeCharacterFull = info.character;
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
      <Box sx={{ display: "flex", marginTop: "2%" }}>
        <div className='anime-character-list-contents'>
          <CharacterDetails character={info.character} />
          <Grid container>
            <ImageList cols={columnSize} rowHeight={rowHeight}>
              {animeCharacter.anime.map((entry) => {
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
                      data-testid={`anime-info-anime-recs-list-page-${entry.anime.title}`}
                      href={{
                        pathname: "/anime-info",
                        query: {
                          id: entry.anime.mal_id,
                          title: entry.anime.title,
                        },
                      }}
                    >
                      <ImageListItem>
                        {/* <Box
                          component='img'
                          src={entry.anime.images.jpg.image_url}
                          alt={entry.anime.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 1,
                          }}
                        /> */}
                        <Image
                          src={entry.anime.images.jpg.image_url}
                          alt={entry.anime.title}
                          width={0}
                          height={0}
                          sizes='100vw'
                          style={{ width: "100%", height: "100%" }}
                        />
                        <ImageListItemBar
                          title={entry.anime.title}
                          subtitle={`Role: ${entry.role}`}
                        />
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
    </Box>
  );
};

export default AnimeCharacterAnimeListPage;
