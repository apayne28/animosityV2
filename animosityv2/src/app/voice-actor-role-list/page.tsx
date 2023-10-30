import React, { useState } from "react";

import styles from "../anime-info/styles.module.css";

import { Metadata, ResolvingMetadata } from "next";

import VoiceActorSideContent from "../voice-actor-page/VoiceActorSideContent";
import VoiceActorRoleListPage from "./VoiceActorRoleListPage";

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

async function getVoiceActor(actorId: string | string[] | null) {
  try {
    const actorTemp = await fetch(
      `https://api.jikan.moe/v4/people/${actorId}/full`
    ).then((res) => res.json());

    return actorTemp.data;
  } catch (error) {
    console.log("Actor not found");
  }
}

const page = async ({ params, searchParams }: Props) => {
  let id = searchParams?.id ?? "";

  const voiceActorData = getVoiceActor(id);

  const [voiceActor] = await Promise.all([voiceActorData]);
  return (
    <div className={styles.anime_info_content_container}>
      <VoiceActorSideContent voiceActor={voiceActor} />

      {/* <AnimeInfoMainContent
        animeData={anime}
        animeCharacterListData={characters}
        recommendedAnimeData={recommendations}
      /> */}
      {/* <AnimeCharacterListPage
        animeData={anime}
        characterList={characters}
        recommendedAnime={recommendations}
      /> */}
      <VoiceActorRoleListPage voiceActor={voiceActor} />
    </div>
  );
};

export default page;
