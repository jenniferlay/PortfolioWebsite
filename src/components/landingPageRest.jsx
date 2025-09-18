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
            img: "./battlebites2.png",
            link: "https://hackthe6repo.onrender.com/",
            name: "BattleBites"
        }
    
    ]

    return(
        <section id="pageSetup" className="landingPageContainer">
            <h1>About Me</h1>
            <div className="aboutMeContainer">
                {/* PROBABLY PUTTING AN IMAGE HERE */}
                <p>I'm a Computer Engineering student at Toronto Metropolitan University with a strong passion for full-stack development. I love designing and building end-to-end applications that are efficient, scalable, and focused on the user experience. Whether it’s structuring a solid backend or crafting responsive interfaces, I enjoy problem-solving and creativity that come with both sides of development. I'm always looking to collaborate, learn from others, and contribute to projects that make a real impact.</p>
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