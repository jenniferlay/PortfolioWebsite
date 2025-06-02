import "../styles/footer.css";
import linkedInImage from "../assets/linkedin.png"; // make sure this path is correct
import linkedinIcon from "../assets/linkedinpic.png";
import githubIcon from "../assets/github.png";
import emailIcon from "../assets/email.png";

export default function FooterComp() {
    return (
        <footer className="footerComp">
            <ul>
                <li>
                    <a href="https://github.com/jenniferlay" target="_blank" rel="noopener noreferrer">
                        <i className="githubicon"></i>
                        <img className="icon-img" src={githubIcon} alt="link" />

                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jennifer-lay/" target="_blank" rel="noopener noreferrer">
                        <i className="linkedinicon"></i>
                        <img className="icon-img" src={linkedinIcon} alt="linkedinicon" />

                    </a>
                </li>
                <li>
                    <a href="mailto:jennierlay@gmail.com">
                        <i className="emailicon"></i>
                        <img className="icon-img" src={emailIcon} alt="emailicon" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
