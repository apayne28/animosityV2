import React from "react";
import AnimeInfoSideContent from "./AnimeInfoSideContent";
import AnimeInfoMainContent from "./AnimeInfoMainContent";
import styles from "./styles.module.css";

export const dynamic = "force-dynamic";

async function getAnime(animeId: string | string[] | null) {
  const animeTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${animeId}/full`
  ).then((res) => res.json());

  return animeTemp.data;
}

async function getAnimeCharacters(animeId: string | string[] | null) {
  const characterTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${animeId}/characters`
  ).then((res) => res.json());

  return characterTemp.data;
}

async function getRecommendedAnime(animeId: string | string[] | null) {
  let recommendedAnimeTemp = await fetch(
    `https://api.jikan.moe/v4/anime/${animeId}/recommendations`
  ).then((res) => res.json());
  return recommendedAnimeTemp.data;
}

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let id = searchParams?.id ?? "";

  const animeData = getAnime(id);
  const characterData = getAnimeCharacters(id);
  const recommendedAnimeData = getRecommendedAnime(id);

  const [anime, characters, recommendations] = await Promise.all([
    animeData,
    characterData,
    recommendedAnimeData,
  ]);
  //Grabs Anime Info

  //   console.log("page", animeData, characterData, recommendedAnimeData);

  return (
    <div className={styles.anime_info_content_container}>
      <AnimeInfoSideContent animeData={anime} />

      <AnimeInfoMainContent
        animeData={anime}
        animeCharacterListData={characters}
        recommendedAnimeData={recommendations}
      />
    </div>
  );
};

export default page;
