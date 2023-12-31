"use client";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Person, Recommendation } from "../../AnimosityTypes";
import styles from "../anime-info/styles.module.css";
import Link from "next/link";
import AnimeInfoDetails from "../anime-info/AnimeInfoDetails";
import VoiceActorDetails from "../voice-actor-page/VoiceActorDetails";

interface VoiceActorRoleListProps {
  voiceActor: Person;
}

const AnimeRecommendationListPage = (info: VoiceActorRoleListProps) => {
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

  let filteredVoiceRoles = info.voiceActor.voices
    .filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.character.name === value.character.name)
    )
    .sort((a, b) => {
      // You need to provide a proper comparison function here
      // to sort based on your criteria. For example, if you want to sort by role:
      if (a.role < b.role) return -1;
      if (a.role > b.role) return 1;
      return 0;
    });

  let filteredAnime = filteredVoiceRoles.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.anime.title === value.anime.title &&
          t.anime.title === value.anime.title
      )
  );
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
          <VoiceActorDetails voiceActor={info.voiceActor} />
          <Grid container>
            <ImageList cols={columnSize} rowHeight={rowHeight}>
              {filteredAnime.map((entry) => {
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
                        <Box
                          component='img'
                          src={entry.anime.images.jpg.image_url}
                          alt={entry.anime.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 1,
                          }}
                        />
                        <ImageListItemBar
                          title={entry.anime.title}
                          subtitle={`Role: ${
                            entry.role
                          }`}
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

export default AnimeRecommendationListPage;
