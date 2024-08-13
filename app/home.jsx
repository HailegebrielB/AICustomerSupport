import React from "react";
import "./home.css";
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
        <div className="header">
          <div className="left">
              <button>Learn More</button>
          </div>
          <div className="right">
              <h1>We Strive. We Act. We Deliver.</h1>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h4>
          </div>
        </div>
          <video className="vid" src={require("../cameraVid.mp4")} autoPlay muted loop></video>
      </div>
      <div className="chatContainer">
        <Fab onClick={handleOpen}>
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
