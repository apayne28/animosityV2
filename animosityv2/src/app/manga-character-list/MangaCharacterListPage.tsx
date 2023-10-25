"use client";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimeCharacters } from "../../AnimosityTypes";
import styles from "../anime-info/styles.module.css";

interface AnimeCharacterListProps {
  charactersList: any;
  mangaData: any;
  recommendedAnime: any;
}

const AnimeCharacterListPage = (info: AnimeCharacterListProps) => {
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
    <Box sx={{ display: "flex", marginTop: "2%" }}>
      <div className={styles.anime_character_list_contents}>
        <Grid container>
          <ImageList cols={columnSize} rowHeight={rowHeight}>
            {info.charactersList.map((character: AnimeCharacters) => {
              let characterEntry = character.character;

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
                  {/* <Link
                    to='/character-profile'
                    state={{ characterId: characterEntry.mal_id }}
                    data-testid={`anime-info-page-character-list-entry-${characterEntry.name}`}
                  > */}
                  <ImageListItem>
                    <Box
                      component='img'
                      sx={{ width: "100%", height: "100%" }}
                      src={characterEntry.images.jpg.image_url}
                      alt={characterEntry.name}
                    />

                    <ImageListItemBar
                      title={`${characterEntry.name} (${character.role})`}
                    />
                  </ImageListItem>
                  {/* </Link> */}
                </Grid>
              );
            })}
          </ImageList>
        </Grid>
      </div>
    </Box>
  );
};

export default AnimeCharacterListPage;
