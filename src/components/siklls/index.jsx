import Slider from "react-slick";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiNextdotjs, SiPython, SiTypescript } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"; // Agar boshqa CSS kerak bo'lsa

const Siklls = () => {
  const settings = {
    dots: true, // Pastda navigatsion nuqtalar
    infinite: true, // Cheksiz aylanma
    speed: 500, // Tezlik (millisekund)
    slidesToShow: 5, // Bir vaqtning o'zida necha slayd ko'rsatiladi
    slidesToScroll: 1, // Bir marta scroll qilinganda nechta slayd siljiydi
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 2000, // Avtomatik aylanish tezligi
    pauseOnHover: true, // Hover qilinganda pauza
  };

  return (
    <div id="skils" className="siklls">
      <h1>My Skills</h1>
      <div className="slider-container">
        <Slider {...settings}>
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
