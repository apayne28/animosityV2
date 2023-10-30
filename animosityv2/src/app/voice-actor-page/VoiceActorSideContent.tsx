import {
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import styles from "../anime-info/styles.module.css";
import { Person } from "../../AnimosityTypes";

interface VoiceActorProps {
  voiceActor: Person;
}
const VoiceActorSideContent = (info: VoiceActorProps) => {
  return (
    <div className={styles.anime_character_side_content}>
      <ImageList cols={1}>
        <ImageListItem>
          <Box
            component='img'
            src={info.voiceActor.images.jpg.image_url}
            alt={info.voiceActor.name}
            sx={{ width: "100%", height: "100%", borderRadius: 1 }}
          />
          <ImageListItemBar
            title={<Typography>{info.voiceActor.name}</Typography>}
          />
        </ImageListItem>
      </ImageList>

      <div className={styles.anime_characters_nickname_container}>
        {info.voiceActor.alternate_names.length > 0 ? (
          <Grid item sx={{ paddingBottom: 5 }}>
            <Typography
              sx={{
                backgroundColor: "#59C9A5",
                padding: "2%",
                borderRadius: "1%",
                fontSize: 23,
                opacity: "80%",
              }}
            >
              Nicknames:
            </Typography>
            {info.voiceActor.alternate_names.map((nicknames) => {
              return (
                <Typography sx={{ padding: "2%", fontSize: 19 }}>
                  {nicknames}
                </Typography>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </div>
      <div className={styles.anime_character_members_number}>
        <Typography
          sx={{
            backgroundColor: "#59C9A5",
            padding: "2%",
            borderRadius: "1%",
            fontSize: 23,
            opacity: "80%",
          }}
        >
          Member Favorites:
        </Typography>
        <Typography
          sx={{ padding: "2%", fontSize: 25 }}
        >{`${info.voiceActor.favorites.toLocaleString("en-US")}`}</Typography>
      </div>
    </div>
  );
};

export default VoiceActorSideContent;
