"use client";
import React from "react";
import "./home.css";
import "./supportButton.css";
import ChatBot from "./chatbot";
import Image from "next/image";
import { Button, Fab, Modal } from "@mui/material";
import supportIcon from "/public/customer-service-support.svg";
import { useState } from "react";
import Review from "./review.js";

export default function Home() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const handleOpen = () => setSupportOpen(true);
  const handleClose = () => {
    setSupportOpen(false);
    setReviewOpen(true);
  };

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
              Specializing in innovative solutions across various industries,
              leveraging advanced technologies to enhance efficiency and growth.
            </h4>
          </div>
        </div>
        <video
          className="vid"
          src={require("../cameraVid.mp4")}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="chatContainer">
        <Fab onClick={handleOpen} id="csButton">
          <Image src={supportIcon} fill></Image>
        </Fab>
        <Modal open={supportOpen} onClose={handleClose}>
          <ChatBot></ChatBot>
        </Modal>
      </div>
      <Review
        openState={reviewOpen}
        closeFunc={() => {
          setReviewOpen(false);
        }}
      ></Review>
    </div>
  );
}
