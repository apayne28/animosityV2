import {
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import styles from "../anime-info/styles.module.css";
import { AnimeCharacterFull } from "../../AnimosityTypes";
import Image from "next/image";

interface AnimeCharacterProps {
  character: any;
}

const AnimeCharacterSideContent = (info: AnimeCharacterProps) => {
  let animeCharacter: AnimeCharacterFull = info.character;

  return (
    <div
      className={styles.anime_characters_side_content}
      data-testid={`anime-character-side-content-${animeCharacter.name}`}
    >
      <ImageList cols={1}>
        <ImageListItem>
          {/* <Box
            component='img'
            src={animeCharacter.images.jpg.image_url}
            alt={animeCharacter.name}
            sx={{ width: "100%", height: "100%", borderRadius: 1 }}
          /> */}
          <Image
            src={animeCharacter.images.jpg.image_url}
            alt={animeCharacter.name}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "100%" }}
          />
          <ImageListItemBar
            title={<Typography>{animeCharacter.name}</Typography>}
            subtitle={
              <Typography>{`${
                animeCharacter.name_kanji ? `${animeCharacter.name_kanji}` : ""
              }`}</Typography>
            }
          />
        </ImageListItem>
      </ImageList>

      <div className={styles.anime_characters_nickname_container}>
        {animeCharacter.nicknames.length > 0 ? (
          <Grid item sx={{ paddingBottom: 5 }}>
            <Typography
              sx={{
                backgroundColor: "#59C9A5",
                padding: "2%",
                borderRadius: "1%",
                fontSize: 23,
                opacity: "80%",
              }}
            >
              Nicknames:
            </Typography>
            {animeCharacter.nicknames.map((nicknames) => {
              return (
                <Typography sx={{ padding: "2%", fontSize: 19 }}>
                  {nicknames}
                </Typography>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </div>
      <div className={styles.anime_character_members_number}>
        <Typography
          sx={{
            backgroundColor: "#59C9A5",
            padding: "2%",
            borderRadius: "1%",
            fontSize: 23,
            opacity: "80%",
          }}
        >
          Member Favorites:
        </Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 25 }}
        >{`${animeCharacter.favorites.toLocaleString("en-US")}`}</Typography>
      </div>
    </div>
  );
};

export default AnimeCharacterSideContent;
