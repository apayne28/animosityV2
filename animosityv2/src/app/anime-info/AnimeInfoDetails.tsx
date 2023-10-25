import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";

import styles from "./styles.module.css";

interface AnimeInfoMainConfigProps {
  animeData: any;
  animeCharacterListData: any;
  recommendedAnimeData: any;
}
const AnimeInfoDetails = (info: AnimeInfoMainConfigProps) => {
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
              pathname: "/anime-info",
              query: {
                id: info.animeData.mal_id,
                title: info.animeData.title,
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
              pathname: "/anime-character-list",
              query: {
                id: info.animeData.mal_id,
                title: `${info.animeData.title} Characters`,
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

        {info.recommendedAnimeData && info.recommendedAnimeData.length > 0 && (
          <Nav.Item>
            <Link
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
            >
              <Typography
                className={styles.anime_info_content_navbar_items}
                sx={{ fontSize: 28 }}
              >
                Recommendations
              </Typography>
            </Link>
          </Nav.Item>
        )}
      </Nav>
    </Box>
  );
};

export default AnimeInfoDetails;
