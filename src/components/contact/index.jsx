import { IoPerson } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import "./style.scss";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <IoPerson />
          <h4>Abdulaziz </h4>
          <h3>Abduhakimov</h3>
        </div>
        <div className="contact-card">
          <GrContact />
          <h4>
            <a href="tel:+998996882812">Phone Number</a>
          </h4>
          <h3>
            <a href="https://t.me/abdukhakimov">Telegram</a>
          </h3>
        </div>
        <div className="contact-card">
          <FaLocationDot />
          <h4>
            <a href="https://maps.windows.com/?form=WNAMSH&collection=point.41.287953_69.328697_Point">
              Location
            </a>
          </h4>
          <h3>US Office</h3>
        </div>
        <div className="contact-card">
          <SiGmail />
          <h4>
            <a href="mailto:byabduhakimov@gmail.com">Gmail</a>
          </h4>
          <h3>
            <a href="https://github.com/byaznavur">GitHub</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
