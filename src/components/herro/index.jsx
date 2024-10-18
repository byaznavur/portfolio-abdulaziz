import herroImg from "../../../src/assets/image/image.png";
import "./style.scss";
const Herro = () => {
  return (
    <div>
      <div className="herro">
        <div className="herro-info">
          <h1>Hello, I'm Abdulaziz</h1>
          <h2>I'm a Front-End Developer</h2>

          <p>
            I love continuously learning new things and applying them in my work
            to create modern, user-friendly web experiences.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="herro-img">
          <img src={herroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Herro;
