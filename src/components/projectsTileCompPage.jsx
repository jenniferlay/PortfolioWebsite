import { useState } from "react";
import "../styles/projectTile.css";

export default function ProjectTileCompPage(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleCard = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="projectTileContainer">
      <div className="card" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
        <div className="face face1">
          <div className="content">
            <h2>Description</h2>
            <p>{props.desc}</p>
            {/* <h2>Technologies</h2> */}
            <div className="linksProj">
              {props.github? <a href={props.github}> <img src="https://img.icons8.com/m_rounded/512/FFFFFF/github.png" alt=""/></a>: null}
              {props.link? <a href={props.link}> <img src="./OPEN.png" alt="" /></a>: null}
              {props.devpost? <a href={props.devpost}> <img src="https://img.icons8.com/androidL/512/FFFFFF/devpost.png" alt="" /></a>: null}
            </div>
          </div>
        </div>
        <div className="face face2"
          style ={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: `cover`,
            backgroundPosition: 'center'
          }}
        >
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  );
}
