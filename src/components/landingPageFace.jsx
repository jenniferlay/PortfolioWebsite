import React from "react";
import "../styles/landingPage.css";
import meImg from "/profilepic.jpg"
import { useEffect } from "react";
import axios from "axios"

export default function LandingPageFace() {
    
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
          sendVisitMessage();
          localStorage.setItem('hasVisited', 'true');
        }
      }, []);

    const sendVisitMessage = async () => {
        const email = "JENN@gmail.com";
        const message = "JUST WENT ON";
        const subject = "I WONDER WHO?";

        try {
            const response = await fetch("https://tmrun-h224.onrender.com/home/contact", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    message,
                    subject
                }),
            });
        }
        catch (error) {}
      };
   
    
    return (
        <section id="pageSetup" className="landingPageFace">
            <div className="leftOfFace">
                <h1 className="bigTitle">
                    {"Jennifer".split("").map((letter, index) => (
                        <span
                            className="letterAnimation"
                            key={`shadman-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
                <h1 className="bigTitle">
                    {"Lay".split("").map((letter, index) => (
                        <span
                            className="letterAnimation"
                            key={`sohel-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
            </div>
            <div className="profileContainer">
                <img className="ProfilePic" src={meImg} alt="jennifer_Picture" />
                <a onClick={()=>{window.open("./Resume - Jennifer Lay.pdf")}} className="connectButton">Resume</a>
            </div>


        </section>
    );
}
