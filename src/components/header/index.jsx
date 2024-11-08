import { useState } from "react";
import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleBtn = () => {
    setOpen(!open);
  };
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <h1 title="Bakhtiyarovich">
            <a href="#">Ab </a>
          </h1>
        </div>
        <button onClick={toggleBtn} className="burgerBtn">
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>
        <ul className={`${open ? "list " : ""}`}>
          <li>
            <a href="#abour">About</a>
          </li>
          <li>
            <a href="#education">My Edu</a>
          </li>

          <li>
            <a href="#skils">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
