import "./style.scss";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // ijtimoiy ikonlar

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__top">
        <div className="footer__brand">
          <h3>AB</h3>
          <h4>Junior Front-End Developer</h4>
        </div>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#education">My Edu</a>
          <a href="#skils">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer__bottom">
        <h3>© 2024 Abdulaziz. All Rights Reserved</h3>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
