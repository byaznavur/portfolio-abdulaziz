import najot from "../../assets/image/najot.png";
import tdtu from "../../assets/image/tdtu.png";
import cambrage from "../../assets/image/cambrage.png";
import mohir from "../../assets/image/mohir.png";
import "./style.scss";
const Edu = () => {
  return (
    <div id="education" className=" education ">
      <h1>My Education</h1>
      <div className="education-images ">
        <a className="education-link" href="https://tdtu.uz/">
          {" "}
          <img src={tdtu} alt="TDTU logo" />
        </a>
        <a
          className="education-link"
          href="https://najottalim.uz/?srsltid=AfmBOopxc3s0Swv2YDg4h2hmSrwJYpj5tRoJikkwL2qCTq0jXWEE345g"
        >
          {" "}
          <img src={najot} alt="Najot Ta'lim logo" />
        </a>
        <a className="education-link" href="https://cambridgeonline.uz/">
          {" "}
          <img src={cambrage} alt="Cambridge logo" />
        </a>
        <a className="education-link" href="https://mohirdev.uz/">
          {" "}
          <img src={mohir} alt="Mohirdev   logo" />
        </a>
      </div>
    </div>
  );
};

export default Edu;
