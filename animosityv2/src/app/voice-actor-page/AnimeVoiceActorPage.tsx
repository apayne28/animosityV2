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

import Link from "next/link";
import { Person } from "../../AnimosityTypes";

interface VoiceActorProps {
  voiceActor: Person;
}
const AnimeVoiceActorPage = (info: VoiceActorProps) => {
  let voiceActor = info.voiceActor;
  let voiceRoles = info.voiceActor.voices;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 855, itemsToShow: 3, itemsToScroll: 3 },

    { width: 1100, itemsToShow: 4, itemsToScroll: 4 },
    { width: 2081, itemsToShow: 6, itemsToScroll: 6 },

    { width: 3008, itemsToShow: 8, itemsToScroll: 8 },
  ];

  // let filteredVoiceRoles = voiceRoles
  //   .filter(
  //     (value, index, self) =>
  //       index ===
  //       self.findIndex(
  //         (t) =>
  //           t.character.name === value.character.name &&
  //           t.character.name === value.character.name
  //       )
  //   )
  //   .sort((a, b) => a.role === "main");

  let filteredVoiceRoles = voiceRoles
    .filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.character.name === value.character.name)
    )
    .sort((a, b) => {
      // You need to provide a proper comparison function here
      // to sort based on your criteria. For example, if you want to sort by role:
      if (a.role < b.role) return -1;
      if (a.role > b.role) return 1;
      return 0;
    });

  let filteredAnime = filteredVoiceRoles.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.anime.title === value.anime.title &&
          t.anime.title === value.anime.title
      )
  );

  return (
    <div>
      <Box>
        <div className='header-content'>
          {/* <Header /> */}
          {/* <NavigationBar /> */}
        </div>
      </Box>
      <div className={styles.anime_characters_main}>
        <div className={styles.anime_character_side_content}>
          <ImageList cols={1}>
            <ImageListItem>
              <Box
                component='img'
                src={voiceActor.images.jpg.image_url}
                alt={voiceActor.name}
                sx={{ width: "100%", height: "100%", borderRadius: 1 }}
              />
              <ImageListItemBar
                title={<Typography>{voiceActor.name}</Typography>}
              />
            </ImageListItem>
          </ImageList>

          <div className={styles.anime_characters_nickname_container}>
            {voiceActor.alternate_names.length > 0 ? (
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
                {voiceActor.alternate_names.map((nicknames) => {
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
            >{`${voiceActor.favorites.toLocaleString("en-US")}`}</Typography>
          </div>
        </div>
        <div className={styles.anime_character_main_info_container}>
          <div>
            {/* <VoiceActorDetails
              animeId={actor}
              charList={filteredVoiceRoles}
              animeRecList={filteredAnime}
            /> */}
          </div>
          <div className={styles.anime_info_character_info_content}>
            <div className={styles.anime_character_name_header}>
              {/* <Typography>{`${animeCharacter.name} (${
                  animeCharacter.name_kanji ? animeCharacter.name_kanji : ""
                })`}</Typography> */}
              <Typography
                variant='h3'
                sx={{
                  fontSize: 26,
                  marginTop: "1%",
                  marginBottom: "1%",
                  marginLeft: "1%",
                }}
              >{`${voiceActor.name} `}</Typography>
            </div>

            <div className={styles.anime_info_content_guts}>
              <div className={styles.anime_info_main_popularity_container}>
                <h3>Background</h3>
                {voiceActor.about ? (
                  <div>
                    <Typography sx={{ margin: "1%", fontSize: 22 }}>
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
                      {voiceActor.about}
                      {/* </ShowMoreText> */}
                    </Typography>
                  </div>
                ) : (
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        paddingBottom: "2%",
                        marginLeft: " 1%",
                        marginTop: " 2%",
                      }}
                    >
                      N/A
                    </Typography>
                  </Box>
                )}

                <Box
                  sx={{
                    backgroundColor: "#56e39f",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "2.5%",
                  }}
                >
                  <h3>Roles</h3>
                  {/* <Link
                    to='/voice-actor-role-list-page'
                    state={{
                      roleList: filteredVoiceRoles,
                      voiceActor: voiceActor.mal_id,
                      animeList: filteredAnime,
                    }}
                    style={{ textDecoration: "none" }}
                  > */}
                  <Typography
                    sx={{
                      // padding: "0.5%",
                      fontSize: 29,
                      // display: "flex",
                      // justifyContent: "flex-end",

                      // marginRight: "1%",
                    }}
                  >
                    {/* <Typography sx={{ padding: "0.5%", fontSize: 19, display: 'flex' }}> */}
                    View More
                  </Typography>
                  {/* </Link> */}
                </Box>

                <div
                  className={styles.anime_character_voice_actors}
                  style={{
                    width: `${filteredVoiceRoles.length >= 1 ? "95%" : "50%"}`,
                    margin: `${
                      filteredVoiceRoles.length >= 5 ? "auto" : "auto"
                    }`,
                    marginTop: "2%",
                  }}
                >
                  <div className={styles.anime_info_character_list}>
                    <Carousel breakPoints={breakPoints}>
                      {filteredVoiceRoles?.map((actor) => {
                        return (
                          <div>
                            <ImageList cols={1} rowHeight={400}>
                              <Link
                                href={{
                                  pathname: "/anime-character-page",
                                  query: {
                                    id: actor.character.mal_id,
                                    title: actor.character.name,
                                  },
                                }}
                              >
                                <ImageListItem>
                                  <Box
                                    component='img'
                                    src={actor.character.images.jpg.image_url}
                                    alt={actor.character.name}
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: 1,
                                    }}
                                  />
                                  <ImageListItemBar
                                    title={
                                      <Typography>
                                        {actor.character.name}
                                      </Typography>
                                    }
                                    subtitle={
                                      <Typography>{`Role: ${actor.role}`}</Typography>
                                    }
                                  />
                                </ImageListItem>
                              </Link>
                            </ImageList>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>

                <Divider />
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
                    to='/voice-actor-anime-list-page'
                    state={{
                      roleList: filteredVoiceRoles,
                      voiceActor: voiceActor.mal_id,
                      animeList: filteredAnime,
                    }}
                    style={{ textDecoration: "none" }}
                  > */}
                  <Typography
                    sx={{
                      // padding: "0.5%",
                      fontSize: 29,
                      // display: "flex",
                      // justifyContent: "flex-end",
                      // marginTop: "17%",
                      // marginRight: "1%",
                    }}
                  >
                    {/* <Typography sx={{ padding: "0.5%", fontSize: 19, display: 'flex' }}> */}
                    View More
                  </Typography>
                  {/* </Link> */}
                </Box>

                <div
                  className={styles.anime_character_voice_actors}
                  style={{
                    width: `${filteredAnime.length >= 5 ? "95%" : "60%"}`,
                    margin: `${filteredAnime.length >= 5 ? "auto" : "auto"}`,
                    marginTop: "2%",
                  }}
                >
                  <div className={styles.anime_info_character_list}>
                    <Carousel breakPoints={breakPoints}>
                      {filteredAnime?.map((appearances) => {
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
                            >
                              <ImageList cols={1} rowHeight={400}>
                                <ImageListItem>
                                  <Box
                                    component='img'
                                    src={appearances.anime.images.jpg.image_url}
                                    alt={appearances.anime.title}
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: 1,
                                    }}
                                  />
                                  <ImageListItemBar
                                    title={appearances.anime.title}
                                    //   subtitle={`Role: ${appearances.role}`}
                                  />
                                </ImageListItem>
                              </ImageList>
                            </Link>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>

                <Divider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeVoiceActorPage;
