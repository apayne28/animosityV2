import React from "react";
import AnimeInfoSideContent from "./AnimeInfoSideContent";
import AnimeInfoMainContent from "./AnimeInfoMainContent";
import styles from "./styles.module.css";
import { Metadata, ResolvingMetadata } from "next";

export const dynamic = "force-dynamic";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const title = searchParams?.title ?? "AnimosityV2";
  console.log("title", title);

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: title,
  };
}
async function getAnime(animeId: string | string[] | null) {
  try {
    const animeTemp = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/full`
    ).then((res) => res.json());

    return animeTemp.data;
  } catch (error) {
    console.log("Anime not found");
  }
}

async function getAnimeCharacters(animeId: string | string[] | null) {
  try {
    const characterTemp = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/characters`
    ).then((res) => res.json());

    return characterTemp.data;
  } catch {
    console.log("Anime Character List not found");
  }
}

async function getRecommendedAnime(animeId: string | string[] | null) {
  try {
    let recommendedAnimeTemp = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/recommendations`
    ).then((res) => res.json());
    return recommendedAnimeTemp.data;
  } catch {
    console.log("Anime Recs not found");
  }
}

const page = async ({ params, searchParams }: Props) => {
  let id = searchParams?.id ?? "";

  const animeData = getAnime(id);
  const characterData = getAnimeCharacters(id);
  const recommendedAnimeData = getRecommendedAnime(id);

  const [anime, characters, recommendations] = await Promise.all([
    animeData,
    characterData,
    recommendedAnimeData,
  ]);

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
