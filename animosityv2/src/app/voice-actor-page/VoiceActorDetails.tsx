import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";

import styles from "../anime-info/styles.module.css";
import { AnimeVoiceActor, Person } from "../../AnimosityTypes";

interface VoiceActorDetailsConfigProps {
  voiceActor: AnimeVoiceActor;
  //   roles: any;
  //   animeography: any;
}
const VoiceActorDetails = (info: VoiceActorDetailsConfigProps) => {
  console.log(info.voiceActor.mal_id);
  return (
    <Box data-testid='anime_info_anime_details_bar'>
      <Nav className={styles.rb_navbar}>
        <Nav.Item>
          <Link
            data-testid='anime-info-anime-details-bar-details'
            // onClick={(e) => {
            //   navigate("/anime-info", {
            //     state: { animeId: location.state.animeId },
            //   });
            //   window.location.reload();
            // }}
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
            // to='/anime-character-list-page'
            // state={{
            //   animeId: props.animeId,
            //   animeRecList: props.animeRecList,
            //   charList: props.charList,
            // }}
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

        {/* {info?.animeography && info.animeography.length > 0 && (
          <Nav.Item>
            {/* <Link
              data-testid='anime-info-anime-details-bar-recommendations'
              //   to='/anime-recs-page'
              //   state={{
              //     animeId: props.animeId,
              //     animeRecList: props.animeRecList,
              //     charList: props.charList,
              //   }}
              //   onClick={(e) => console.log(location, props)}
              href={{
                pathname: "/recommended-anime-list",
                query: {
                  id: info.animeData.mal_id,
                  title: info.animeData.title,
                },
              }}
            > */}
        <Typography
          className={styles.anime_info_content_navbar_items}
          sx={{ fontSize: 28 }}
        >
          Recommendations
        </Typography>
        {/* </Link> */}
        {/* </Nav.Item> */}
        {/* )}  */}
      </Nav>
    </Box>
  );
};

export default VoiceActorDetails;
