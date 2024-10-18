import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

import video from "../../assets/video/video.mp4";
import "./style.scss";
const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about-hirro">
        <div className="about-video">
          <video width="100%" height="auto" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="about-info">
          <h2>I'm Abdulaziz Abduhakimov</h2>
          <p>
            I am currently 19 years old and a 3rd-year student at TDTU. Besides
            programming, I have many interests such as reading books, capturing
            aesthetic videos and photos, and experimenting with new technologies
            and knowledge in my projects, among others.
          </p>

          <div className="social">
            <a href="https://github.com/byaznavur">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@aznavuriy">
              <FaYoutube />
            </a>
            <a href="https://www.youtube.com/@aznavuriy">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@aznavuriy">
              <FaTelegram />
            </a>
            <a href="https://www.youtube.com/@aznavuriy">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
