"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { Box, Divider, Typography } from "@mui/material";

import AnimeInfoSideContent from "./AnimeInfoSideContent";
import AnimeInfoMainContent from "./AnimeInfoMainContent";

const AnimeInfoContent = () => {
  const searchParams = useSearchParams();

  let id = searchParams.get("id");

  //Grabs Anime Info

  console.log(id);

  return (
    <div className='anime-info-content-container'>
      <AnimeInfoSideContent id={id} />

      <AnimeInfoMainContent id={id} />
    </div>
  );
};

export default AnimeInfoContent;
