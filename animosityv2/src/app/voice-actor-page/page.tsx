import React from "react";

import styles from "./styles.module.css";
import { Metadata, ResolvingMetadata } from "next";
import AnimeVoiceActorPage from "./AnimeVoiceActorPage";

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

  const [actor] = await Promise.all([voiceActorData]);

  return (
    <div>
      <AnimeVoiceActorPage voiceActor={actor} />
    </div>
  );
};

export default page;
