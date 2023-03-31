import "./styles.css";

import reactjs from "../../assets/images/reactjs.png";
import linkedin from "../../assets/images/linkedin.png";

import Button from "../Button";

const Hero = ({ children }) => {
  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  return (
    <div className="hero">
      {children}
      <h1>
        Olá, sou o <span>{"{ Jeffrey }"}</span>
      </h1>
      <h2>
        <div className="stack-badge">
          <img src={reactjs} alt="React JS" />
        </div>
        react js developer
        <div className="carrot" />
      </h2>
      <Button text="Meu perfil LinkedIn" icon={linkedin} url={linkedin_url} />
      <span>Este site ainda se encontra em desenvolvimento.</span>
    </div>
  );
};

export default Hero;
