import { Typography, Divider } from "@mui/material";
import React from "react";
import Image from "next/image";

interface AnimeInfoSideConfigProps {
  anime: any;
}

const AnimeInfoSideContent = (anime: AnimeInfoSideConfigProps) => {
  console.log(anime);
  return (
    <div>
      <Image
        src={anime.anime.images.jpg.image_url}
        alt={`${anime.anime.title} Poster`}
        height={600}
        width={400}
      />
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
          {anime.anime.title_english && (
            <Typography
              className='anime-info-alternative-english'
              sx={{ padding: "2%", fontSize: 19 }}
            >
              {`English: ${anime.anime.title_english}`}
            </Typography>
          )}
          {anime.anime.title_japanese && (
            <Typography
              className='anime-info-alternative-japanese'
              sx={{ padding: "2%", fontSize: 19 }}
            >
              {`Japanese: ${anime.anime.title_japanese}`}
            </Typography>
          )}
          <Divider sx={{ paddingBottom: "1%", marginBottom: "5%" }} />

          {anime.anime.title_synonyms && (
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

              {anime.anime.title_synonyms.length > 0 ? (
                anime.anime.title_synonyms.map((altTitles: string) => (
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
            anime.anime.rank ? anime.anime.rank : "N/A"
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
            anime.anime.score ? anime.anime.score : "N/A"
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
          >{`Type: ${anime.anime.type}`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Episodes: ${
            anime.anime.episodes ? anime.anime.episodes : "N/A"
          }`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Status: ${anime.anime.status}`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Aired: ${anime.anime.aired.string}`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Premiered: ${
            anime.anime.season && anime.anime.year
              ? `${anime.anime.season}. ${anime.anime.year}`
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>
            {`Broadcast: ${
              anime.anime.broadcast.string
                ? anime.anime.broadcast.string
                : "Unknown"
            }`}{" "}
          </Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Producers: ${
            anime.anime.producers.length > 0
              ? anime.anime.producers.map((producers: string) =>
                  producers ? ` ${producers.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Licensors: ${
            anime.anime.licensors.length
              ? anime.anime.licensors.map((licensors: string) =>
                  licensors ? ` ${licensors.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>

          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Studios: ${
            anime.anime.studios.length > 0
              ? anime.anime.studios.map((studios: string) =>
                  studios ? ` ${studios.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>

          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Genres: ${anime.anime.genres.map((genres: string) =>
            genres ? ` ${genres.name} ` : "Unknown"
          )}`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Theme: ${
            anime.anime.themes.length > 0
              ? anime.anime.themes.map((themes: string) =>
                  themes ? ` ${themes.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Demographics: ${
            anime.anime.demographics.length > 0
              ? anime.anime.demographics.map((demographics: string) =>
                  demographics ? ` ${demographics.name} ` : "N/A"
                )
              : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Duration: ${
            anime.anime.duration ? anime.anime.duration : "Unknown"
          }`}</Typography>
          <Typography sx={{ padding: "2%", fontSize: 19 }}>{`Rating: ${
            anime.anime.rating ? anime.anime.rating : "Unknown"
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
          >{`Popularity: ${anime.anime.popularity}`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Members: ${anime.anime.members}`}</Typography>
          <Typography
            sx={{ padding: "2%", fontSize: 19 }}
          >{`Favorites: ${anime.anime.favorites}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfoSideContent;
