import React, { useState } from "react";

import styles from "../anime-info/styles.module.css";

import { Metadata, ResolvingMetadata } from "next";
import MangaInfoSideContent from "../manga-info/MangaInfoSideContent";
import MangaRecommendationListPage from "./MangaRecommendationListPage";

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

async function getManga(mangaId: string | string[] | null) {
  try {
    const mangaTemp = await fetch(
      `https://api.jikan.moe/v4/manga/${mangaId}/full`
    ).then((res) => res.json());

    return mangaTemp.data;
  } catch (error) {
    console.log("Manga not found");
  }
}

async function getMangaCharacters(mangaId: string | string[] | null) {
  try {
    const characterTemp = await fetch(
      `https://api.jikan.moe/v4/manga/${mangaId}/characters`
    ).then((res) => res.json());

    return characterTemp.data;
  } catch {
    console.log("manga Character List not found");
  }
}

async function getRecommendedManga(mangaId: string | string[] | null) {
  try {
    let recommendedMangaTemp = await fetch(
      `https://api.jikan.moe/v4/manga/${mangaId}/recommendations`
    ).then((res) => res.json());
    return recommendedMangaTemp.data;
  } catch {
    console.log("Manga Recs not found");
  }
}

const page = async ({ params, searchParams }: Props) => {
  let id = searchParams?.id ?? "";

  const mangaData = getManga(id);
  //   const characterData = getAnimeCharacters(id);
  const recommendedMangaData = getRecommendedManga(id);

  const [manga, recommendations] = await Promise.all([
    mangaData,

    recommendedMangaData,
  ]);
  return (
    <div className={styles.anime_info_content_container}>
      <MangaInfoSideContent mangaData={manga} />

      {/* <AnimeInfoMainContent
        animeData={anime}
        animeCharacterListData={characters}
        recommendedAnimeData={recommendations}
      /> */}
      <MangaRecommendationListPage
        mangaData={manga}
        // charactersList={characters}
        recommendedManga={recommendations}
      />
    </div>
  );
};

export default page;
