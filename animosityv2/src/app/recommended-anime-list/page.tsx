import React, { useState } from "react";

import styles from "../anime-info/styles.module.css";

import { Metadata, ResolvingMetadata } from "next";
import AnimeInfoSideContent from "../anime-info/AnimeInfoSideContent";
import AnimeRecommendationListPage from "./AnimeRecommendationListPage";

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
  const title =
    `Recommendations Based Off ${searchParams?.title}` ?? "AnimosityV2";
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
  //   const characterData = getAnimeCharacters(id);
  const recommendedAnimeData = getRecommendedAnime(id);

  const [anime, recommendations] = await Promise.all([
    animeData,

    recommendedAnimeData,
  ]);
  return (
    <div className={styles.anime_info_content_container}>
      <AnimeInfoSideContent animeData={anime} />

      <AnimeRecommendationListPage
        animeData={anime}
        // charactersList={characters}
        recommendedAnime={recommendations}
      />
    </div>
  );
};

export default page;
