import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <h1 title="Bakhtiyarovich">
            <a href="#">AB</a>
          </h1>
        </div>
        <button className="burgerBtn">
          <GiHamburgerMenu />
        </button>
        <ul>
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
