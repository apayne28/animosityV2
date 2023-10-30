import React, { useState } from "react";

import styles from "../anime-info/styles.module.css";

import { Metadata, ResolvingMetadata } from "next";

import AnimeCharacterSideContent from "../anime-character-page/AnimeCharacterSideContent";
import AnimeCharacterAnimeListPage from "./AnimeCharacterAnimeListPage";

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

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: title,
  };
}
async function getCharacter(characterId: string | string[] | null) {
  try {
    const characterTemp = await fetch(
      `https://api.jikan.moe/v4/characters/${characterId}/full`
    ).then((res) => res.json());

    return characterTemp.data;
  } catch (error) {
    console.log("Character not found");
  }
}

const page = async ({ params, searchParams }: Props) => {
  let id = searchParams?.id ?? "";

  const characterData = getCharacter(id);

  const [character] = await Promise.all([characterData]);

  return (
    <div className={styles.anime_info_content_container}>
      <AnimeCharacterSideContent character={character} />
      <AnimeCharacterAnimeListPage character={character} />
    </div>
  );
};

export default page;
