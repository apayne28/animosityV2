"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Mainpage } from "./components/Mainpage";

export default function Home() {
  // const jikanjs = require("@mateoaranda/jikanjs");

  // let yor = await jikanjs.loadCharacter(170329);
  return (
    <div>
      <Mainpage />
    </div>
  );
}
