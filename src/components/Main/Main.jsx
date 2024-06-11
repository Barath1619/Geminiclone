import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Barath Kumar.</span></p>
                <p>How can I help you today? </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Act like Mowgli from The Jungle Book. Answer this question: What's your favorite memory with Baloo?</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Help me finish my gaming podcast tagline: play, win, and ....</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Outline a way to home routine: organizing my closet</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Draft an email to a recruiter to accept a job offer</p>
                    <img src={assets.code_icon}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main