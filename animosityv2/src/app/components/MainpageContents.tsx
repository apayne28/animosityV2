"use client";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "../page.module.css";

interface MainpageProps {
  currentAnimeSeason: any;
  upcomingAnimeSeason: any;
  currentYear: any;
  currentSeason: any;
  upcomingSeason: any;
}

const MainpageContents = (info: MainpageProps) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 855, itemsToShow: 3, itemsToScroll: 3 },

    { width: 1100, itemsToShow: 4, itemsToScroll: 4 },
    { width: 2081, itemsToShow: 6, itemsToScroll: 6 },

    { width: 3008, itemsToShow: 8, itemsToScroll: 8 },
  ];

  return (
    <div className={styles.homepage_content}>
      <div className={styles.homepage_header_content}>
        <Typography
          variant='h3'
          sx={{ marginBottom: "2%" }}
          data-testid={`${info.currentSeason}-anime-${info.currentYear}-header`}
        >
          {`${
            info.currentSeason[0]?.toLocaleUpperCase() +
            info.currentSeason.substring(1)
          } ${info.currentYear} Anime`}
        </Typography>

        <Typography
          sx={{
            fontSize: 29,
          }}
        >
          View More
        </Typography>
      </div>
      <Box sx={{ paddingBottom: "3%" }} data-testid='spring-anime-carousel'>
        <Carousel breakPoints={breakPoints}>
          {info.currentAnimeSeason.map((anime, aniKey) => {
            return (
              // <Grid item className='individual-featured-anime-container'>
              <div key={aniKey} style={{ width: "95%" }}>
                <ImageList cols={1} rowHeight={500}>
                  <Link
                    href={{
                      pathname: "/anime-info",
                      query: { id: anime.mal_id },
                    }}
                  >
                    <ImageListItem key={anime.id}>
                      <Box
                        component='img'
                        className='featured-anime-image'
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        sx={{ width: "100%", height: "100%" }}
                      />
                      <ImageListItemBar title={anime.title} />
                    </ImageListItem>
                    {/* <div className='featured-anime-text'>{anime.title}</div> */}
                  </Link>
                </ImageList>
              </div>
              // </Grid>
            );
          })}
        </Carousel>
      </Box>

      <div className={styles.homepage_header_content}>
        <Typography
          variant='h3'
          sx={{ marginBottom: "2%" }}
          data-testid={`summer-anime-${info.currentYear}-header`}
        >
          {`${
            info.upcomingSeason[0].toLocaleUpperCase() +
            info.upcomingSeason.substring(1)
          } ${
            info.upcomingSeason === "winter"
              ? info.currentYear + 1
              : info.currentYear
          } Anime`}
        </Typography>

        <Typography
          sx={{
            fontSize: 29,
          }}
        >
          View More
        </Typography>
      </div>
      <Box sx={{ paddingBottom: "3%" }} data-testid='summer-anime-carousel'>
        <Carousel breakPoints={breakPoints}>
          {info.upcomingAnimeSeason.map((anime, aniKey) => {
            return (
              // <Grid item className='individual-featured-anime-container'>
              <div key={aniKey} style={{ width: "95%" }}>
                <ImageList cols={1} rowHeight={500}>
                  <Link
                    href={{
                      pathname: "/anime-info",
                      query: { id: anime.mal_id },
                    }}
                  >
                    <ImageListItem key={anime.id} cols={1} rows={1}>
                      <img
                        className='featured-anime-image'
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        sx={{ width: "100%", height: "100%" }}
                      />
                      <ImageListItemBar title={anime.title} />
                    </ImageListItem>
                    {/* <div className='featured-anime-text'>{anime.title}</div> */}
                  </Link>
                </ImageList>
              </div>
              // </Grid>
            );
          })}
        </Carousel>
      </Box>

      {/* <Typography
        variant='h3'
        sx={{ marginBottom: "2%" }}
        data-testid='recent-promos-header'
      >
        Watch Recent Promos
      </Typography>
      <Box sx={{ paddingBottom: "3%" }} data-testid='recent-promos-carousel'>
        <Carousel breakPoints={promoBreakPoints}>
          {recentPromos.map((anime, aniKey) => {
            return (
              <div key={aniKey} s>
                <ImageList cols={1} rowHeight={400}>
                  <ImageListItem>
                    <ReactPlayer url={anime.trailer.url} />
                    <ImageListItemBar
                      title={
                        <a
                          href={anime.trailer.url}
                          data-testid={`recent-promos-link-${anime.entry.title}`}
                          style={{ textDecoration: "none", color: "#ffffff" }}
                        >
                          {anime.entry.title}
                        </a>
                      }
                      subtitle={anime.title}
                    />
                  </ImageListItem>
                </ImageList>
              </div>
            );
          })}
        </Carousel>
      </Box> */}

      {/* <Typography
        variant='h3'
        sx={{ marginBottom: "2%" }}
        data-testid='popular-promos-header'
      >
        Watch Popular Promos
      </Typography>
      <Box sx={{ paddingBottom: "3%" }} data-testid='popular-promos-carousel'>
        <Carousel breakPoints={promoBreakPoints}>
          {popularPromos.map((anime, aniKey) => {
            return (
              <div key={aniKey}>
                <ImageList cols={1} rowHeight={420}>
                  <ImageListItem>
                    <ReactPlayer url={anime.trailer.url} />
                    <ImageListItemBar
                      title={
                        <a
                          href={anime.trailer.url}
                          data-testid={`popular-promos-link-${anime.entry.title}`}
                          style={{ textDecoration: "none", color: "#ffffff" }}
                        >
                          {anime.entry.title}
                        </a>
                      }
                      subtitle={anime.title}
                    />
                  </ImageListItem>
                </ImageList>
              </div>
            );
          })}
        </Carousel>
      </Box> */}
    </div>
  );
};

export default MainpageContents;
