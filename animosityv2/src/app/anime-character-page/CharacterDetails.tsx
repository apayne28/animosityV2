import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";

import styles from "../anime-info/styles.module.css";
import { AnimeCharacterFull, Person } from "../../AnimosityTypes";

interface AnimeCharacterProps {
  character: any;
}
const CharacterDetails = (info: AnimeCharacterProps) => {
  let animeCharacter: AnimeCharacterFull = info.character;

  return (
    <Box data-testid='anime_info_anime_details_bar'>
      <Nav className={styles.rb_navbar}>
        <Nav.Item>
          <Link
            data-testid='anime-info-anime-details-bar-details'
            href={{
              pathname: "/anime-character-page",
              query: {
                id: animeCharacter.mal_id,
                title: animeCharacter.name,
              },
            }}
          >
            <Typography
              className={styles.anime_info_content_navbar_items}
              sx={{ fontSize: 28 }}
            >
              Details
            </Typography>
          </Link>
        </Nav.Item>

        {animeCharacter.voices && animeCharacter.voices.length > 0 && (
          <Nav.Item>
            <Link
              data-testid='anime-info-anime-details-bar-characters'
              href={{
                pathname: "/anime-character-voice-actor-list",
                query: {
                  id: animeCharacter.mal_id,
                  title: `${animeCharacter.name}'s Voice Actors`,
                },
              }}
            >
              <Typography
                className={styles.anime_info_content_navbar_items}
                sx={{ fontSize: 28 }}
              >
                Voice Actors
              </Typography>
            </Link>
          </Nav.Item>
        )}
        {animeCharacter.anime && animeCharacter.anime.length > 0 && (
          <Nav.Item>
            <Link
              data-testid='anime-info-anime-details-bar-recommendations'
              href={{
                pathname: "/anime-character-anime-list",
                query: {
                  id: animeCharacter.mal_id,
                  title: `${animeCharacter.name} Anime Appearances`,
                },
              }}
            >
              <Typography
                className={styles.anime_info_content_navbar_items}
                sx={{ fontSize: 28 }}
              >
                Anime
              </Typography>
            </Link>
          </Nav.Item>
        )}
        {animeCharacter.manga && animeCharacter.manga.length > 0 && (
          <Nav.Item>
            <Link
              data-testid='anime-info-anime-details-bar-recommendations'
              href={{
                pathname: "/anime-character-manga-list",
                query: {
                  id: animeCharacter.mal_id,
                  title: `${animeCharacter.name} Anime Appearances`,
                },
              }}
            >
              <Typography
                className={styles.anime_info_content_navbar_items}
                sx={{ fontSize: 28 }}
              >
                Manga
              </Typography>
            </Link>
          </Nav.Item>
        )}
      </Nav>
    </Box>
  );
};

export default CharacterDetails;
