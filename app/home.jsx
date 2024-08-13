import React from "react";
import "./home.css";
import "./supportButton.css";
import ChatBot from "./chatbot";
import Image from "next/image";
import { Button, Fab, Modal } from "@mui/material";
import supportIcon from "/public/customer-service-support.svg";
import { useState } from "react";

function home() {
  const [supportOpen, setSupportOpen] = useState(false);

  const handleOpen = () => setSupportOpen(true);
  const handleClose = () => setSupportOpen(false);
  return (
    <div className="homeContainer">
      <div className="nav">
        <div className="logo">
          <h1>Shal Inc.</h1>
        </div>
        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Pricing</a>
          <a href="">Contacts</a>
          <button style={{ backgroundColor: "#4D8DC3" }}>Get Started</button>
          <button>Login</button>
        </div>
      </div>
      <div className="homePage">
        
      </div>
      <div className="chatContainer">
        <Fab onClick={handleOpen} id="csButton">
          <Image src={supportIcon} fill></Image>
        </Fab>
        <Modal open={supportOpen} onClose={handleClose}>
          <ChatBot></ChatBot>
        </Modal>
      </div>
    </div>
  );
}

export default home;
