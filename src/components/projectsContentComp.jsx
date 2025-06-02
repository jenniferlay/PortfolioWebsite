import "../styles/projectsPage.css"
import ProjectTileCompPage from "./projectsTileCompPage.jsx"

export default function ProjectsContent(){

    const projects = [
        {
            img: "./leetbotpic2.png",
            link: "https://leetcodebot-gumy.onrender.com/",
            name: "LeetBot",
            github: "https://github.com/shadmansohel04/LeetcodeBot",
            devpost: "https://devpost.com/software/leetcode-robo?ref_content=my-projects-tab&ref_feature=my_projects",
            tech:[
                "ReactJS",
                "Socket.io",
                "Flask",
                "Mistral AI",
                "NES.CSS"
            ],
            desc: "LeetBot, the first-place winner at Ignitian Hacks 2024, is a multiplayer PvP game based on LeetCode stats. Built with a Python Flask backend, Socket.io for real-time interactions, and a React.js frontend styled with NES.CSS, it integrates Mistral AI for unique usernames and the LeetCode GraphQL API to track player stats. Refined post-hackathon, LeetBot is now live—grab a friend and play!"
        },
        {
            img: "./skinmatch.png",
            link: "https://skinmatch.onrender.com/",
            name: "SkinMatch",
            github: "https://github.com/shadmansohel04/TMRUN_FRONTEND",
            tech:[
                "ReactJS",
                "NodeJS",
                "MongoDB",
                "ExpressJS",
                "CSS"
            ],
            desc: " SkinMatch is a full-stack web application built with Flask, React.js, and PostgreSQL. I developed a backend API using Python and Flask to manage server-side functionality and product classification algorithms, based on user input from a dynamically generated skincare quiz. SkinMatch delivers personalized skincare recommendations, empowering users to make smarter beauty choices and transforming how they discover skincare products. Get started today"
        },
        {
            img: "./dearDiary.png",
            // link: "https://rateto-frontend.onrender.com/",
            name: "Dear Diary",
            // github: "https://github.com/shadmansohel04/RateTO_Frontend",
            tech:[
                "ReactJS",
                "Flask",
                "PostgreSQL",
                "React Leaflet",
                "CSS"
            ],
            desc: "DearDiary is a voice journaling application powered by the Seeed Studio XIAO nRF52840 Sense, Python, and Google Cloud. I developed a backend API using Python to capture audio through the onboard microphone and transcribe it using the Google Speech-to-Text API. The transcribed text is then automatically written to a Google doc via the Google Docs API."
        },
        {
            img: "./lesseats.png",
            name: "LessEats",
            github: "https://github.com/jenniferlay/LessEats",
            tech:[
                "Python",
                "AWS EC2 Instance"
            ],
            desc: "A full-stack food ordering simulation using Java microservices deployed on Apache Tomcat, featuring REST APIs for user management, restaurant menus, order processing, and payments."
        }
    ]

    return(
        <section id="pageSetup" className="projectsPage">
            <h1 className="bigTitle">
                {"Projects".split("").map((letter, index)=>{
                    return(
                        <span
                            className="letterAnimation"
                            key={`projects-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    )
                })}
            </h1>

            <div className="projectsContainerPage">
                {projects.map((each, index)=>{
                    if(each.devpost){
                        return(<ProjectTileCompPage desc={each.desc} tech={each.tech} key={index} img={each.img} name={each.name} github={each.github} link={each.link} devpost={each.devpost}/>)
                    }
                    return(<ProjectTileCompPage desc={each.desc} tech={each.tech} key={index} img={each.img} name={each.name} github={each.github} link={each.link}/>)

                })}
            </div>
            

        </section>
    )
}