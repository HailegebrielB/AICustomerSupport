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
        <div className="header">
          <div className="left">
            <button>Learn More</button>
          </div>
          <div className="right">
            <h1>We Strive. We Act. We Deliver.</h1>
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h4>
          </div>
        </div>
        <div className="overlay"></div>
        <video
          className="vid"
          src={require("../cameraVid.mp4")}
          autoPlay
          muted
          loop
        ></video>
        <div className="homePageContent">
          <div className="heading">
            <h2>Welcome to</h2>
            <h1>Shal Inc.</h1>
            <button style={{ backgroundColor: "#4D8DC3" }}>Get Started</button>
          </div>
          <div className="getStarted">
            <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h2>
          </div>
        </div>
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
