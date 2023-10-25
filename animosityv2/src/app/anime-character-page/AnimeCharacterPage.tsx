"use client";
import React from "react";

import {
  Box,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "../anime-info/styles.module.css";
import {
  AnimeCharacterAnimeAppearances,
  AnimeCharacterFull,
  AnimeCharacterMangaAppearances,
} from "../../AnimosityTypes";
import Link from "next/link";

interface AnimeCharacterProps {
  character: any;
}
const AnimeCharacterPage = (info: AnimeCharacterProps) => {
  let animeCharacter: AnimeCharacterFull = info.character;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 855, itemsToShow: 3, itemsToScroll: 3 },

    { width: 1100, itemsToShow: 4, itemsToScroll: 4 },
    { width: 2081, itemsToShow: 6, itemsToScroll: 6 },

    { width: 3008, itemsToShow: 8, itemsToScroll: 8 },
  ];

  return (
    <div>
      <Box>
        <div className='header-content'>
          {/* <Header /> */}
          {/* <NavigationBar /> */}
        </div>
      </Box>
      <div
        className={styles.anime_characters_main}
        data-testid={`anime-character-main-${animeCharacter.name}`}
      >
        <div
          className={styles.anime_characters_side_content}
          data-testid={`anime-character-side-content-${animeCharacter.name}`}
        >
          <ImageList cols={1}>
            <ImageListItem>
              <Box
                component='img'
                src={animeCharacter.images.jpg.image_url}
                alt={animeCharacter.name}
                sx={{ width: "100%", height: "100%", borderRadius: 1 }}
              />
              <ImageListItemBar
                title={<Typography>{animeCharacter.name}</Typography>}
                subtitle={
                  <Typography>{`${
                    animeCharacter.name_kanji
                      ? `${animeCharacter.name_kanji}`
                      : ""
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
            >{`${animeCharacter.favorites.toLocaleString(
              "en-US"
            )}`}</Typography>
          </div>
        </div>
        <div className={styles.anime_character_main_info_container}>
          <div>
            {/* <CharacterDetails
              characterId={animeCharacter.mal_id}
              voiceActors={animeCharacter.voices}
              animeList={animeCharacter.anime}
              mangaList={animeCharacter.manga}
            /> */}
          </div>
          <div className={styles.anime_info_character_info_content}>
            <div className={styles.anime_character_name_header}>
              {/* <Typography>{`${animeCharacter.name} (${
                  animeCharacter.name_kanji ? animeCharacter.name_kanji : ""
                })`}</Typography> */}
              <Typography
                data-testid={`anime-character-header-${animeCharacter.name}`}
                variant='h3'
                sx={{
                  fontSize: 26,
                  marginTop: "1%",
                  marginBottom: "1%",
                  marginLeft: "1%",
                }}
              >{`${animeCharacter.name} ${
                animeCharacter.name_kanji
                  ? `(${animeCharacter.name_kanji})`
                  : ""
              }`}</Typography>
            </div>

            <div className={styles.anime_info_content_guts}>
              <div className={styles.anime_info_main_popularity_container}>
                <h3>Background</h3>

                <Typography
                  sx={{ margin: "1%", fontSize: 22 }}
                  data-testid={`anime-character-${animeCharacter.name}-background`}
                >
                  {/* <ShowMoreText
                    lines={15}
                    more='Show more'
                    less='Show less'
                    expanded={false}
                    width={0}
                    truncatedEndingComponent={"... "}
                    keepNewLines={true}
                    style={{ fontSize: "80" }}
                  > */}
                  {animeCharacter.about}
                  {/* </ShowMoreText> */}
                </Typography>

                <Divider sx={{ paddingTop: 2 }} />

                {animeCharacter.voices.length > 0 && (
                  <div
                    data-testid={`anime-character-${animeCharacter.name}-voice-actor-list`}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#56e39f",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "2.5%",
                      }}
                    >
                      <h3>Voice Actors</h3>
                      {/* <Link
                        data-testid={`anime-character-${animeCharacter.name}-voice-actor-list-view-more`}
                        to='/character-page-voice-actor-list'
                        state={{
                          voiceActors: animeCharacter.voices,
                          characterId: animeCharacter.mal_id,

                          animeList: animeCharacter.anime,
                          mangaList: animeCharacter.manga,
                        }}
                        style={{ textDecoration: "none" }}
                      > */}
                      <Typography
                        sx={{
                          fontSize: 29,
                          //   marginTop: "17%",
                        }}
                      >
                        View More
                      </Typography>
                      {/* </Link> */}
                    </Box>
                    <div
                      className={styles.anime_character_voice_actors}
                      style={{
                        width: `${
                          animeCharacter.voices.length >= 1 ? "95%" : "50%"
                        }`,
                        margin: `${
                          animeCharacter.voices.length >= 5 ? "auto" : "auto"
                        }`,
                        marginTop: "2%",
                      }}
                    >
                      <div
                        className={styles.anime_info_character_list}
                        data-testid={`anime-character-${animeCharacter.name}-voice-actor-carousel`}
                      >
                        <Carousel breakPoints={breakPoints}>
                          {animeCharacter.voices.map((actor) => {
                            return (
                              <div>
                                {/* <Link
                                  data-testid={`anime-character-${animeCharacter.name}-voice-actor-${actor.person.name}`}
                                  to='/character-voice-actor-page'
                                  state={{
                                    characterValue: actor.person.mal_id,
                                  }}
                                > */}
                                <ImageList cols={1} rowHeight={400}>
                                  <ImageListItem>
                                    <Box
                                      component='img'
                                      src={actor.person.images.jpg.image_url}
                                      alt={actor.person.name}
                                      sx={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 1,
                                      }}
                                    />
                                    <ImageListItemBar
                                      title={
                                        <Typography>
                                          {actor.person.name}
                                        </Typography>
                                      }
                                      subtitle={
                                        <Typography>{`Language: ${actor.language}`}</Typography>
                                      }
                                    />
                                  </ImageListItem>
                                </ImageList>
                                {/* </Link> */}
                              </div>
                            );
                          })}
                        </Carousel>
                      </div>
                    </div>

                                      <Divider />
                                      
                  </div>
                )}

                {animeCharacter.anime.length > 0 && (
                  <div
                    data-testid={`anime-character-${animeCharacter.name}-animeography`}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#56e39f",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "2.5%",
                      }}
                    >
                      <h3>Animeography</h3>

                      {/* <Link
                        data-testid={`anime-character-${animeCharacter.name}-animeography-list-view-more`}
                        to='/character-page-anime-list'
                        state={{
                          voiceActors: animeCharacter.voices,
                          characterId: animeCharacter.mal_id,

                          animeList: animeCharacter.animeo,
                          mangaList: animeCharacter.manga,
                        }}
                        style={{ textDecoration: "none" }}
                      > */}
                      <Typography
                        sx={{
                          fontSize: 29,

                          //   marginTop: "17%",
                        }}
                      >
                        View More
                      </Typography>
                      {/* </Link> */}
                    </Box>
                    <div
                      className={styles.anime_character_voice_actors}
                      style={{
                        width: `${
                          animeCharacter.anime.length >= 3 ? "95%" : "60%"
                        }`,
                        margin: `${
                          animeCharacter.anime.length >= 5 ? "auto" : "auto"
                        }`,
                        marginTop: "2%",
                      }}
                    >
                      <div
                        className={styles.anime_info_character_list}
                        data-testid={`anime-character-${animeCharacter.name}-animeography-carousel`}
                      >
                        <Carousel breakPoints={breakPoints}>
                          {animeCharacter.anime.map(
                            (appearances: AnimeCharacterAnimeAppearances) => {
                              return (
                                <div>
                                  <Link
                                    href={{
                                      pathname: "/anime-info",
                                      query: {
                                        id: appearances.anime.mal_id,
                                        title: appearances.anime.title,
                                      },
                                    }}
                                    data-testid={`anime-character-${animeCharacter.name}-animeography-${appearances.anime.title}`}
                                  >
                                    <ImageList cols={1} rowHeight={400}>
                                      <ImageListItem>
                                        <Box
                                          component='img'
                                          src={
                                            appearances.anime.images.jpg
                                              .image_url
                                          }
                                          alt={appearances.anime.title}
                                          sx={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 1,
                                          }}
                                        />
                                        <ImageListItemBar
                                          title={appearances.anime.title}
                                          subtitle={`Role: ${appearances.role}`}
                                        />
                                      </ImageListItem>
                                    </ImageList>
                                  </Link>
                                </div>
                              );
                            }
                          )}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                )}

                {animeCharacter.manga.length > 0 && (
                  <Box
                    data-testid={`anime-character-${animeCharacter.name}-mangaography`}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#56e39f",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: "2.5%",
                      }}
                    >
                      <h3>Mangaography</h3>

                      {/* <Link
                        data-testid={`anime-character-${animeCharacter.name}-mangaography-view-more`}
                        to='/character-page-manga-list'
                        state={{
                          voiceActors: animeCharacter.voices,
                          characterId: animeCharacter.mal_id,

                          animeList: animeCharacter.anime,
                          mangaList: animeCharacter.manga,
                        }}
                        style={{ textDecoration: "none" }}
                      > */}
                      <Typography
                        sx={{
                          fontSize: 29,

                          //   marginTop: "17%",
                        }}
                      >
                        View More
                      </Typography>
                      {/* </Link> */}
                    </Box>

                    <div
                      className={styles.anime_character_voice_actors}
                      style={{
                        width: `${
                          animeCharacter.manga.length >= 1 ? "95%" : "50%"
                        }`,
                        margin: `${
                          animeCharacter.manga.length >= 5 ? "auto" : ""
                        }`,
                        marginTop: "2%",
                      }}
                    >
                      <div
                        className={styles.anime_info_character_list}
                        data-testid={`anime-character-${animeCharacter.name}-mangaography-carousel`}
                      >
                        <Carousel breakPoints={breakPoints}>
                          {animeCharacter.manga.map(
                            (appearances: AnimeCharacterMangaAppearances) => {
                              console.log(appearances);
                              return (
                                <div>
                                  <div
                                    className={styles.anime_info_rec_anime_item}
                                  >
                                    <div>
                                      <Link
                                        data-testid={`anime-character-${animeCharacter.name}-mangaography-${appearances.manga.title}`}
                                        href={{
                                          pathname: "/manga-info",
                                          query: {
                                            id: appearances.manga.mal_id,
                                            title: appearances.manga.title,
                                          },
                                        }}
                                      >
                                        <ImageList cols={1} rowHeight={400}>
                                          <ImageListItem>
                                            <Box
                                              component='img'
                                              src={
                                                appearances.manga.images.jpg
                                                  .image_url
                                              }
                                              alt={appearances.manga.title}
                                              sx={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: 1,
                                              }}
                                            />
                                            <ImageListItemBar
                                              title={appearances.manga.title}
                                              subtitle={`Role: ${appearances.role}`}
                                            />
                                          </ImageListItem>
                                        </ImageList>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </Carousel>
                      </div>
                    </div>
                  </Box>
                )}

                <Divider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCharacterPage;
