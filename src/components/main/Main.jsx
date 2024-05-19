import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Genimi</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-component">
          <div className="great">
            <p>
              <span>Hello, Ahsaan</span>
            </p>
            <p>How can i help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful plae o see on an upcomming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Brifely summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstrom team bonding activits for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          <div className="main-bottom">
            <div className="searchbox">
              <input type="text" placeholder="Enter a prompt here" />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              genimi may display inacurate info, includeing about people, so double check its responses. Your privacy and Genimi App
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
