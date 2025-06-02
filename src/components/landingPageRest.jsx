import FeaturedProjectsCard from "./featProjCardComp"
import leetbotIMG from "../assets/LEETBOTIMG.png"

export default function LandingPageRestComp(){

    const projArray = [
        {
            img: leetbotIMG,
            link: "https://leetcodebot-gumy.onrender.com/",
            name: "LeetBot"
        },
        {
            img: "./skinmatch.png",
            link: "https://skinmatch.onrender.com/",
            name: "SkinMatch"
        },
        {
            img: "./lesseats.png",
            link: "https://github.com/shadmansohel04/LessEats",
            name: "LessEats"
        }
    
    ]

    return(
        <section id="pageSetup" className="landingPageContainer">
            <h1>About Me</h1>
            <div className="aboutMeContainer">
                {/* PROBABLY PUTTING AN IMAGE HERE */}
                <p>Hey! My name is Jennifer. I'm a third year Computer Engineering student at Toronto Metropolitan University. 
                Previously, I have gained experience in automotive and project management roles. 
                In the future, I am interested in continuing to explore more opportunities in Software Development.</p>
            </div>
            
            <div className="featuredProjects">
                <h1>Featured Projects</h1>
                <div className="projectsContainer">
                    {/* WILL CREATE CUSTOM COMPONNET FOR PROJECT */}
                    {projArray.map((each, index)=>{
                        return(
                            <FeaturedProjectsCard key={index} img={each.img} name={each.name} link={each.link} />
                        )
                    })}
                </div>
            </div>


        </section>
    )
}