import Slider from "react-slick";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiNextdotjs, SiPython, SiTypescript } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Siklls = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Large tablets and smaller desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="skils" className="siklls">
      <h1>My Skills</h1>
      <div className="slider-container">
        <Slider className="slider" {...settings}>
          <div>
            <FaHtml5 className="icon" />
          </div>
          <div>
            <FaCss3 className="icon" />
          </div>
          <div>
            <IoLogoJavascript className="icon" />
          </div>
          <div>
            <FaReact className="icon" />
          </div>
          <div>
            <SiNextdotjs className="icon" />
          </div>
          <div>
            <SiTypescript className="icon" />
          </div>
          <div>
            <SiPython className="icon" />
          </div>
          <div>
            <SiMysql className="icon" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Siklls;
