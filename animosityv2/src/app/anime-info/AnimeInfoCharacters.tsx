"use client";
import { ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
import Link from "next/link";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";
import styles from "./styles.module.css";
import { AnimeCharacter, AnimeCharacters } from "../../AnimosityTypes";

interface AnimeInfoCharactersConfigProps {
  characters: any;
}
const AnimeInfoCharacters = (info: AnimeInfoCharactersConfigProps) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 855, itemsToShow: 3, itemsToScroll: 3 },

    { width: 1100, itemsToShow: 4, itemsToScroll: 4 },
    { width: 2081, itemsToShow: 6, itemsToScroll: 6 },

    { width: 3008, itemsToShow: 8, itemsToScroll: 8 },
  ];

  let animeCharacterList = info.characters;

  return (
    <div className={styles.anime_info_character_list}>
      <Carousel breakPoints={breakPoints}>
        {animeCharacterList.map((character: AnimeCharacters) => {
          let characterEntry: AnimeCharacter = character.character;

          return (
            <div>
              <ImageList cols={1} rowHeight={400}>
                <ImageListItem>
                  <Link
                    href={{
                      pathname: "/anime-character-page",
                      query: {
                        id: characterEntry.mal_id,
                        title: characterEntry.name,
                      },
                    }}
                  >
                    <Image
                      src={characterEntry.images.jpg.image_url}
                      alt={characterEntry.name}
                      // sx={{ borderRadius: 1 }}
                      height={400}
                      width={300}
                    />
                    {/* <Image
                      src={characterEntry.images.jpg.image_url}
                      alt={characterEntry.name}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: "100%", height: "100%" }}
                    /> */}
                    <ImageListItemBar
                      title={characterEntry.name
                        .split(",")
                        .map((part) => part.trim())
                        .reverse()
                        .join(" ")}
                      subtitle={`Role: ${character.role}`}
                      sx={{ borderRadius: 1 }}
                    />
                  </Link>
                </ImageListItem>
                {/* <Typography>{characterEntry.name} </Typography> */}
              </ImageList>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AnimeInfoCharacters;
