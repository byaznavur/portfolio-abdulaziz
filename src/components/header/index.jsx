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
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">My Edu</a>
          </li>

          <li>
            <a href="#">Sikls</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">Social </a>
          </li>
          <li>
            <a href="#">Contact</a>
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
