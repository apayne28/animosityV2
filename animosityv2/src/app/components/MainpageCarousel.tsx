"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import fmab from "../pics/fmab.webp";
import berserk3 from "../pics/berserk.png";
import hxh from "../pics/hxh.webp";
import sg from "../pics/sg.jpg";
import op from "../pics/op.jpg";
import deathnote4 from "../pics/deathnote4.jpg";
import snk from "../pics/snk.jpg";
import cm from "../pics/cm.jpg";
import naruto from "../pics/naruto.jpg";
import opp from "../pics/opp.png";
import Image from "next/image";
import Link from "next/link";

const MainpageCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Link href={{ pathname: "/anime-info", query: { id: 5114 } }}>
            <ImageList cols={1} rowHeight={1200}>
              <ImageListItem>
                <Image
                  src={fmab}
                  alt='Full Metal Alchemist: Brotherhood'
                  fill
                />
                <Carousel.Caption>
                  <Box
                    sx={{
                      backgroundColor: "#3B2C35",
                      // marginLeft: "9.3%",
                      // marginRight: "9.4%",
                      opacity: 0.8,
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{ fontSize: 80 }}>
                      Full Metal Alchemist: Brotherhood
                    </Typography>
                  </Box>
                  {/* <Typography sx={{ fontSize: 80 }}></Typography> */}
                </Carousel.Caption>
              </ImageListItem>
            </ImageList>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link href={{ pathname: "/anime-info", query: { id: 11061 } }}>
            <ImageList cols={1} rowHeight={1200}>
              <ImageListItem>
                <Image src={hxh} alt='Hunter X Hunter (2011)' fill />
                <Carousel.Caption>
                  <Box
                    sx={{
                      backgroundColor: "#3B2C35",
                      // marginLeft: "4%",
                      // marginRight: "4%",
                      opacity: 0.8,
                    }}
                  >
                    <Typography sx={{ fontSize: 80 }}>
                      Hunter X Hunter (2011)
                    </Typography>
                  </Box>
                </Carousel.Caption>
              </ImageListItem>
            </ImageList>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link href={{ pathname: "/anime-info", query: { id: 9253 } }}>
            <ImageList cols={1} rowHeight={1200}>
              <ImageListItem>
                <Image src={sg} alt='Steins;Gate' fill />
                <Carousel.Caption>
                  <Box
                    sx={{
                      backgroundColor: "#3B2C35",
                      // marginLeft: "8%",
                      // marginRight: "8%",
                      opacity: 0.8,
                    }}
                  >
                    <Typography sx={{ fontSize: 80 }}>Steins;Gate</Typography>
                  </Box>
                </Carousel.Caption>
              </ImageListItem>
            </ImageList>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link href={{ pathname: "/anime-info", query: { id: 21 } }}>
            <ImageList cols={1} rowHeight={1200}>
              <ImageListItem>
                <Image src={op} alt='One Piece' fill />
                <Carousel.Caption>
                  <Box
                    sx={{
                      backgroundColor: "#3B2C35",
                      // marginLeft: "8%",
                      // marginRight: "8%",
                      opacity: 0.8,
                    }}
                  >
                    <Typography sx={{ fontSize: 80 }}>One Piece</Typography>
                  </Box>
                </Carousel.Caption>
              </ImageListItem>
            </ImageList>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link href={{ pathname: "/anime-info", query: { id: 1535 } }}>
            <ImageList cols={1} rowHeight={1200}>
              <ImageListItem>
                <Image src={deathnote4} alt='Death Note' fill />
                <Carousel.Caption>
                  <Box
                    sx={{
                      backgroundColor: "#3B2C35",
                      // marginLeft: "8%",
                      // marginRight: "8%",
                      opacity: 0.8,
                    }}
                  >
                    <Typography sx={{ fontSize: 80 }}>Death Note</Typography>
                  </Box>
                </Carousel.Caption>
              </ImageListItem>
            </ImageList>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <ImageList cols={1} rowHeight={1200}>
            <ImageListItem>
              <Image src={berserk3} alt='Berserk' fill />
              <Carousel.Caption>
                {/* <Typography sx={{ fontSize: 80 }}>Berserk</Typography> */}
                <Box
                  sx={{
                    backgroundColor: "#3B2C35",
                    marginLeft: "8%",
                    marginRight: "8%",
                    opacity: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: 100 }}>Berserk</Typography>
                </Box>
              </Carousel.Caption>
            </ImageListItem>
          </ImageList>
        </Carousel.Item>

        <Carousel.Item>
          <ImageList cols={1} rowHeight={1200}>
            <ImageListItem>
              <Image src={snk} alt='Shingeki no Kyojin' fill />
              <Carousel.Caption>
                {/* <Typography sx={{ fontSize: 80 }}>Berserk</Typography> */}
                <Box
                  sx={{
                    backgroundColor: "#3B2C35",
                    marginLeft: "3.3%",
                    marginRight: "3.3%",
                    opacity: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: 100 }}>
                    Shingeki no Kyojin
                  </Typography>
                </Box>
              </Carousel.Caption>
            </ImageListItem>
          </ImageList>
        </Carousel.Item>
        <Carousel.Item>
          <ImageList cols={1} rowHeight={1200}>
            <ImageListItem>
              <Image src={cm} alt='Chainsaw Man' fill />
              <Carousel.Caption>
                {/* <Typography sx={{ fontSize: 80 }}>Berserk</Typography> */}
                <Box
                  sx={{
                    backgroundColor: "#3B2C35",
                    // marginLeft: "3.3%",
                    // marginRight: "3.3%",
                    opacity: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: 100 }}>Chainsaw Man</Typography>
                </Box>
              </Carousel.Caption>
            </ImageListItem>
          </ImageList>
        </Carousel.Item>

        <Carousel.Item>
          <ImageList cols={1} rowHeight={1200}>
            <ImageListItem>
              <Image src={naruto} alt='Naruto' fill />
              <Carousel.Caption>
                {/* <Typography sx={{ fontSize: 80 }}>Berserk</Typography> */}
                <Box
                  sx={{
                    backgroundColor: "#3B2C35",
                    // marginLeft: "3.3%",
                    // marginRight: "3.3%",
                    opacity: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: 100 }}>Naruto</Typography>
                </Box>
              </Carousel.Caption>
            </ImageListItem>
          </ImageList>
        </Carousel.Item>

        <Carousel.Item>
          <ImageList cols={1} rowHeight={1200}>
            <ImageListItem>
              <Image src={opp} alt='Oyasumi Punpun' fill />
              <Carousel.Caption>
                {/* <Typography sx={{ fontSize: 80 }}>Berserk</Typography> */}
                <Box
                  sx={{
                    backgroundColor: "#3B2C35",
                    // marginLeft: "12.4%",
                    // marginRight: "12.4%",
                    opacity: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: 100 }}>Oyasumi Punpun</Typography>
                </Box>
              </Carousel.Caption>
            </ImageListItem>
          </ImageList>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainpageCarousel;
