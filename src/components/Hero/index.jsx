import "./styles.css";

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
        <div className="label"> react js developer</div>
        <div className="carrot" />
      </h2>
      <Button
        text="Encontre-me no LinkedIn"
        icon={linkedin}
        url={linkedin_url}
      />
      <span>Este site ainda se encontra em desenvolvimento.</span>
    </div>
  );
};

export default Hero;
