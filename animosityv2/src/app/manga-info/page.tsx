import React from "react";

import styles from "../anime-info/styles.module.css";
import MangaInfoSideContent from "./MangaInfoSideContent";
import MangaInfoMainContent from "./MangaInfoMainContent";

export const dynamic = "force-dynamic";

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

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let id = searchParams?.id ?? "";

  const mangaData = getManga(id);
  const characterData = getMangaCharacters(id);
  const recommendedAnimeData = getRecommendedManga(id);

  const [manga, characters, recommendations] = await Promise.all([
    mangaData,
    characterData,
    recommendedAnimeData,
  ]);

  return (
    <div className={styles.anime_info_content_container}>
      <MangaInfoSideContent mangaData={manga} />

      <MangaInfoMainContent
        mangaData={manga}
        mangaCharacterListData={characters}
        recommendedMangaData={recommendations}
      />
    </div>
  );
};

export default page;
