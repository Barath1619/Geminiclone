import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/context";

const Main = () => {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Barath Kumar.</span>
              </p>
              <p>How can I help you today? </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Act like Mowgli from The Jungle Book. Answer this question:
                  What's your favorite memory with Baloo?
                </p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>
                  Help me finish my gaming podcast tagline: play, win, and ....
                </p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Outline a way to home routine: organizing my closet</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Draft an email to a recruiter to accept a job offer</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(event) => setInput(event.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                onClick={() => {
                  onSend(input);
                }}
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
