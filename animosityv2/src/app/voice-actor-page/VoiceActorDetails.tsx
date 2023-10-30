import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";

import styles from "../anime-info/styles.module.css";
import {  Person } from "../../AnimosityTypes";

interface VoiceActorDetailsConfigProps {
  voiceActor: Person;

}
const VoiceActorDetails = (info: VoiceActorDetailsConfigProps) => {
  console.log(info.voiceActor.mal_id);
  return (
    <Box data-testid='anime_info_anime_details_bar'>
      <Nav className={styles.rb_navbar}>
        <Nav.Item>
          <Link
            data-testid='anime-info-anime-details-bar-details'
    
            href={{
              pathname: "/voice-actor-page",
              query: {
                id: info.voiceActor.mal_id,
                title: info.voiceActor.name,
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

        <Nav.Item>
          <Link
            data-testid='anime-info-anime-details-bar-characters'
            href={{
              pathname: "/voice-actor-role-list",
              query: {
                id: info.voiceActor.mal_id,
                title: `${info.voiceActor.name}'s Roles`,
              },
            }}
          >
            <Typography
              className={styles.anime_info_content_navbar_items}
              sx={{ fontSize: 28 }}
            >
              Characters
            </Typography>
          </Link>
        </Nav.Item>

        {info?.voiceActor.voices && info.voiceActor.voices.length > 0 && (
          <Nav.Item>
            <Link
              data-testid='anime-info-anime-details-bar-recommendations'
         
              href={{
                pathname: "/voice-actor-animeography",
                query: {
                  id: info.voiceActor.mal_id,
                  title: `${info.voiceActor.name} Animeography`,
                },
              }}
            >
              <Typography
                className={styles.anime_info_content_navbar_items}
                sx={{ fontSize: 28 }}
              >
                Animeography
              </Typography>
            </Link>
          </Nav.Item>
        )}
      </Nav>
    </Box>
  );
};

export default VoiceActorDetails;
