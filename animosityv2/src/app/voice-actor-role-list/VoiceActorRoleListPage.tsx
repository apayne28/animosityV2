"use client";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Person, PersonVoices } from "../../AnimosityTypes";
import styles from "../anime-info/styles.module.css";

import VoiceActorDetails from "../voice-actor-page/VoiceActorDetails";

interface AnimeCharacterListProps {
  voiceActor: Person;
}

const VoiceActorRoleListPage = (info: AnimeCharacterListProps) => {
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
  return (
    <Box sx={{ display: "flex", marginTop: "2%" }}>
      <div className={styles.anime_character_list_contents}>
        {/* <AnimeInfoDetails
          animeData={info.animeData}
          animeCharacterListData={info.characterList}
          recommendedAnimeData={info.recommendedAnime}
        /> */}
        <VoiceActorDetails voiceActor={info.voiceActor} />
        <Grid container>
          <ImageList cols={columnSize} rowHeight={rowHeight}>
            {filteredVoiceRoles.map((character: PersonVoices) => {
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
                  <Link
                    data-testid={`anime-info-page-character-list-entry-${characterEntry.name}`}
                    href={{
                      pathname: "/anime-character-page",
                      query: {
                        id: characterEntry.mal_id,
                        title: characterEntry.name,
                      },
                    }}
                  >
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
                  </Link>
                </Grid>
              );
            })}
          </ImageList>
        </Grid>
      </div>
    </Box>
  );
};

export default VoiceActorRoleListPage;
