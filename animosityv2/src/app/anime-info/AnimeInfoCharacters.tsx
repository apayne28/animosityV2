import { ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
import Link from "next/link";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";

interface AnimeInfoCharactersConfigProps {
  characters: any;
}
const AnimeInfoCharacters = (info: AnimeInfoCharactersConfigProps) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 550, itemsToShow: 2, itemsToScroll: 2 },

    { width: 855, itemsToShow: 3, itemsToScroll: 3 },

    { width: 1100, itemsToShow: 4, itemsToScroll: 4 },
    { width: 2081, itemsToShow: 6, itemsToScroll: 6 },

    { width: 3008, itemsToShow: 8, itemsToScroll: 8 },
  ];

  console.log(info);
  let animeCharacterList = info.characters;

  return (
    <div className='anime-info-character-list'>
      <Carousel breakPoints={breakPoints}>
        {animeCharacterList.map((character) => {
          let characterEntry = character.character;
          // console.log(characterEntry);

          return (
            <div>
              <ImageList cols={1} rowHeight={400}>
                <ImageListItem>
                  <Image
                    src={characterEntry.images.jpg.image_url}
                    alt={characterEntry.name}
                    // sx={{ borderRadius: 1 }}
                    height={400}
                    width={300}
                  />
                  <ImageListItemBar
                    title={characterEntry.name}
                    sx={{ borderRadius: 1 }}
                  />
                </ImageListItem>
                {/* <Typography>{characterEntry.name} </Typography> */}
              </ImageList>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AnimeInfoCharacters;
