"use client";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/esm/Navbar";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import logo2 from "../pics/logo2.png";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='navbar navbar-custom'>
        <Container>
          <Navbar.Brand href='#home'>
            <Link href='/'>
              <Image
                src={logo2}
                width={240}
                height={100}
                alt='Animosity Logo'
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='Anime' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Top Anime
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title='Manga' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Top Manga
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <TextField sx={{ backgroundColor: "#fff" }} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
