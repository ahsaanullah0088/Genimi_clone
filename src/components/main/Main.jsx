import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../contexts/Context";
import { useContext } from "react";


const Main = () => {
  const {onSent , recentPrompt , showResult, resultData, loading , setInput , input} = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Genimi</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-component">
          {! showResult ? 
          <div>
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
          </>
          : <div className="result">
            <div className="result_title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            
          </div>
          </div>
          }

          <div className="main-bottom">
            <div className="searchbox">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
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
