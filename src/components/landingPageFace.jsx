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

    const sendVisitMessage= async()=>{
        console.log("STARTED")
        axios.post("https://rateto-backend.onrender.com/JENNIFER/contact",{
            firstname: "new person",
            lastname: "!!!!",
            email: "blahblah@gmail.com",
            phone: "phone",
            msg: "somebody went on my website!!!"
        }).then((response)=>{
            if (response.data.success == true){
                console.log("Message sent!")
            }
            else{
                console.log(response.data.msg)
            }
        }).catch(()=>{
            console.log("Something went wrong")
        })
    }
   
    
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
