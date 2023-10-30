"use client";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AnimeCharacterFull,
  Person,
  Recommendation,
} from "../../AnimosityTypes";
import styles from "../anime-info/styles.module.css";
import Link from "next/link";
import AnimeInfoDetails from "../anime-info/AnimeInfoDetails";
import VoiceActorDetails from "../voice-actor-page/VoiceActorDetails";
import CharacterDetails from "../anime-character-page/CharacterDetails";

interface AnimeCharacterProps {
  character: any;
}

const AnimeCharacterVoiceActorListPage = (info: AnimeCharacterProps) => {
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
          {/* <AnimeInfoDetails
            animeData={info.animeData}
            animeCharacterListData={info.characterList}
            recommendedAnimeData={info.recommendedAnime}
          /> */}
          <CharacterDetails character={info.character} />
          <Grid container>
            <ImageList cols={columnSize} rowHeight={rowHeight}>
              {animeCharacter.voices.map((entry) => {
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
                      data-testid={`anime-info-anime-recs-list-page-${entry.person.name}`}
                      href={{
                        pathname: "/voice-actor-page",
                        query: {
                          id: entry.person.mal_id,
                          title: entry.person.name
                            .split(",")
                            .map((part) => part.trim())
                            .reverse()
                            .join(" "),
                        },
                      }}
                    >
                      <ImageListItem>
                        <Box
                          component='img'
                          src={entry.person.images.jpg.image_url}
                          alt={entry.person.name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 1,
                          }}
                        />
                        <ImageListItemBar
                          title={entry.person.name
                            .split(",")
                            .map((part) => part.trim())
                            .reverse()
                            .join(" ")}
                          subtitle={`Language: ${entry.language}`}
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
      {/* <footer class='footer' /> */}
    </Box>
  );
};

export default AnimeCharacterVoiceActorListPage;
