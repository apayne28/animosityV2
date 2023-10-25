import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";

import styles from "../anime-info/styles.module.css";

interface MangaInfoMainConfigProps {
  mangaData: any;
  mangaCharacterListData: any;
  recommendedMangaData: any;
}
const MangaInfoDetails = (info: MangaInfoMainConfigProps) => {
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
              pathname: "/manga-info",
              query: {
                id: info.mangaData.mal_id,
                title: info.mangaData.title,
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
              pathname: "/manga-character-list",
              query: {
                id: info.mangaData.mal_id,
                title: `${info.mangaData.title} Characters`,
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

        {info.recommendedMangaData && info.recommendedMangaData.length > 0 && (
          <Nav.Item>
            <Link
              data-testid='anime-info-anime-details-bar-recommendations'
              href={{
                pathname: "/recommended-manga-list",
                query: {
                  id: info.mangaData.mal_id,
                  title: info.mangaData.title,
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

export default MangaInfoDetails;
