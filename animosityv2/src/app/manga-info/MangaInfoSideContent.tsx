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
import styles from "../anime-info/styles.module.css";
import { MangaObject } from "../../AnimosityTypes";

interface MangaInfoSideConfigProps {
  mangaData: any;
}

const MangaInfoSideContent = (info: MangaInfoSideConfigProps) => {
  let mangaData: MangaObject = info.mangaData;
  return (
    <div className={styles.anime_info_side_content}>
      <ImageList cols={1}>
        <ImageListItem>
          <Box
            component='img'
            src={mangaData.images.jpg.image_url}
            alt={mangaData.title}
            sx={{ width: "100%", height: "100%", borderRadius: 1 }}
          />
          <ImageListItemBar
            title={mangaData.title}
            subtitle={
              mangaData.title !== mangaData.title_english && (
                <Typography sx={{ paddingTop: 1 }}>{`${
                  mangaData.title_english ? mangaData.title_english : ""
                }`}</Typography>
              )
            }
          />
        </ImageListItem>
      </ImageList>
      <div className='anime-info-alternative-titles-container'>
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
        {mangaData.title_english && (
          <Typography
            className='anime-info-alternative-english'
            sx={{ padding: "2%", fontSize: 19 }}
          >
            {`English: ${mangaData.title_english}`}
          </Typography>
        )}
        {mangaData.title_japanese && (
          <Typography
            className='anime-info-alternative-japanese'
            sx={{ padding: "2%", fontSize: 19 }}
          >
            {`Japanese: ${mangaData.title_japanese}`}
          </Typography>
        )}
        {mangaData.title_synonyms && (
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

            {mangaData.title_synonyms.length > 0 ? (
              mangaData.title_synonyms.map((altTitles) => (
                <Typography
                  className='anime-info-title-synonyms'
                  sx={{ padding: "2%", fontSize: 19 }}
                >
                  {altTitles}
                </Typography>
              ))
            ) : (
              <Typography sx={{ padding: "2%", fontSize: 19 }}>N/A</Typography>
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
        >{`Score: `}</Typography>
        <Typography sx={{ padding: "2%", fontSize: 25 }}>{`${
          mangaData.score ? mangaData.score : "N/A"
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
        >{`Author(s): `}</Typography>

        <Box>
          {mangaData.authors.map((author) => (
            <div>
              <Typography sx={{ padding: "2%", fontSize: 25 }}>
                {author ? ` ${author.name} ` : "N/A"}
              </Typography>
            </div>
          ))}
        </Box>
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
          mangaData.rank ? mangaData.rank.toLocaleString("en-US") : "N/A"
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
        >{`Type: ${mangaData.type}`}</Typography>
        <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Volumes: ${
          mangaData.volumes ? mangaData.volumes.toLocaleString("en-US") : "N/A"
        }`}</Typography>
        <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Chapters: ${
          mangaData.chapters
            ? mangaData.chapters.toLocaleString("en-US")
            : "N/A"
        }`}</Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 19 }}
        >{`Status: ${mangaData.status}`}</Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 19 }}
        >{`Published: ${mangaData.published.string}`}</Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 19 }}
        >{`Genres: ${mangaData.genres.map((genres) =>
          genres ? ` ${genres.name} ` : "N/A"
        )}`}</Typography>
        <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Theme: ${
          mangaData.themes.length > 0
            ? mangaData.themes.map((themes) =>
                themes ? ` ${themes.name} ` : "N/A"
              )
            : "N/A"
        }`}</Typography>
        <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Demographics: ${
          mangaData.demographics.length > 0
            ? mangaData.demographics.map((demographics) =>
                demographics ? ` ${demographics.name} ` : "N/A"
              )
            : "N/A"
        }`}</Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 19 }}
        >{`Serializations: ${mangaData.serializations.map((serialization) =>
          serialization ? ` ${serialization.name} ` : "N/A"
        )}`}</Typography>
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
        >{`Popularity: ${mangaData.popularity.toLocaleString(
          "en-US"
        )}`}</Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 19 }}
        >{`Members: ${mangaData.members.toLocaleString("en-US")}`}</Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 19 }}
        >{`Favorites: ${mangaData.favorites.toLocaleString(
          "en-US"
        )}`}</Typography>
      </div>
    </div>
  );
};

export default MangaInfoSideContent;
