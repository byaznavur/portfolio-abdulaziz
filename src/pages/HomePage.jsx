import About from "../components/about";
import Contact from "../components/contact";
import Edu from "../components/edu";
import Footer from "../components/footer";
import Header from "../components/header";
import Herro from "../components/herro";
import Projects from "../components/projects";

import Sikls from "../components/sikls";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Herro />
        <Edu />
        <Sikls />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
