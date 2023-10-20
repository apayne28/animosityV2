"use client";

import {
  Typography,
  Divider,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface AnimeInfoSideConfigProps {
  animeData: any;
}

const AnimeInfoSideContent = async (info: AnimeInfoSideConfigProps) => {
  let animeData = info.animeData;
  return (
    <div className={styles.anime_info_side_content}>
      <ImageList cols={1}>
        <ImageListItem>
          <Box
            component='img'
            src={animeData.images.jpg.image_url}
            alt={`${animeData.title} Poster`}
            sx={{ width: "100%", height: "100%" }}
          />

          {/* <Image
            src={animeData.images.jpg.image_url}
            alt={`${animeData.title} Poster`}
            fill
            sizes='100%'
          /> */}
          {/* <ImageListItemBar
            title={info.title}
            subtitle={
              info.title !== info.title_english && (
                <Typography sx={{ paddingTop: 1 }}>{`${
                  info.title_english ? info.title_english : ""
                }`}</Typography>
              )
            }
          /> */}
        </ImageListItem>
      </ImageList>
      <div>
        <div>
          <Typography
            variant='h3'
            sx={{
              backgroundColor: "#59C9A5",
              padding: "2%",
              borderRadius: "1%",
              fontSize: 23,
              opacity: "80%",
            }}
          >
            Alternate Titles:
          </Typography>
          {animeData.title_english && (
            <Typography
              className='anime-info-alternative-english'
              sx={{ padding: "2%", fontSize: 19 }}
            >
              {`English: ${animeData.title_english}`}
            </Typography>
          )}
          {animeData.title_japanese && (
            <Typography
              className='anime-info-alternative-japanese'
              sx={{ padding: "2%", fontSize: 19 }}
            >
              {`Japanese: ${animeData.title_japanese}`}
            </Typography>
          )}
          <Divider sx={{ paddingBottom: "1%", marginBottom: "5%" }} />

          {animeData.title_synonyms && (
            <div>
              <Typography
                variant='h3'
                sx={{
                  backgroundColor: "#59C9A5",
                  padding: "2%",
                  borderRadius: "1%",
                  fontSize: 23,
                  opacity: "80%",
                }}
              >
                Synonyms
              </Typography>

              {animeData.title_synonyms.length > 0 ? (
                animeData.title_synonyms.map((altTitles: string) => (
                  <Typography
                    className='anime-info-title-synonyms'
                    sx={{ padding: "2%", fontSize: 19 }}
                  >
                    {altTitles}
                  </Typography>
                ))
              ) : (
                <Typography sx={{ padding: "2%", fontSize: 19 }}>
                  N/A
                </Typography>
              )}
            </div>
          )}
        </div>
        <div className='anime-info-score'>
          <Typography
            sx={{
              backgroundColor: "#59C9A5",
              padding: "2%",
              borderRadius: "1%",
              fontSize: 23,
              opacity: "80%",
            }}
          >{`Rank: `}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 25 }}>{`${
            animeData.rank ? animeData.rank : "N/A"
          }`}</Typography>
        </div>
        <div className='anime-info-score'>
          <Typography
            sx={{
              backgroundColor: "#59C9A5",
              padding: "2%",
              borderRadius: "1%",
              fontSize: 23,
              opacity: "80%",
            }}
          >{`Score: `}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 25 }}>{`${
            animeData.score ? animeData.score : "N/A"
          }`}</Typography>
        </div>

        <div className='anime-info-information'>
          <Typography
            variant='h3'
            sx={{
              backgroundColor: "#59C9A5",
              padding: "2%",
              borderRadius: "1%",
              fontSize: 23,
              opacity: "80%",
            }}
          >
            Information
          </Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Type: ${animeData.type}`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Episodes: ${
            animeData.episodes ? animeData.episodes : "N/A"
          }`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Status: ${animeData.status}`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Aired: ${animeData.aired.string}`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Premiered: ${
            animeData.season && animeData.year
              ? `${animeData.season}. ${animeData.year}`
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>
            {`Broadcast: ${
              animeData.broadcast.string
                ? animeData.broadcast.string
                : "Unknown"
            }`}{" "}
          </Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Producers: ${
            animeData.producers.length > 0
              ? animeData.producers.map((producers: string) =>
                  producers ? ` ${producers.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Licensors: ${
            animeData.licensors.length
              ? animeData.licensors.map((licensors: string) =>
                  licensors ? ` ${licensors.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>

          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Studios: ${
            animeData.studios.length > 0
              ? animeData.studios.map((studios: string) =>
                  studios ? ` ${studios.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>

          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Genres: ${animeData.genres.map((genres: string) =>
            genres ? ` ${genres.name} ` : "Unknown"
          )}`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Theme: ${
            animeData.themes.length > 0
              ? animeData.themes.map((themes: string) =>
                  themes ? ` ${themes.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Demographics: ${
            animeData.demographics.length > 0
              ? animeData.demographics.map((demographics: string) =>
                  demographics ? ` ${demographics.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Duration: ${
            animeData.duration ? animeData.duration : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Rating: ${
            animeData.rating ? animeData.rating : "Unknown"
          }`}</Typography>
        </div>
        <div className='anime-info-statistics'>
          <Typography
            variant='h3'
            sx={{
              backgroundColor: "#59C9A5",
              padding: "2%",
              borderRadius: "1%",
              fontSize: 23,
              opacity: "80%",
            }}
          >
            Statistics:
          </Typography>

          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Popularity: ${animeData.popularity}`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Members: ${animeData.members}`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Favorites: ${animeData.favorites}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfoSideContent;
