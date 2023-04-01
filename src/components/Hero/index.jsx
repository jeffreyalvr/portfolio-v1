import "./styles.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";

import Button from "../Button";

const Hero = ({ children }) => {
  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";
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
      <div className="row">
        <Button text="LinkedIn" icon={linkedin} url={linkedin_url} />
        <Button text="GitHub" icon={github} url={github_url} />
      </div>
      <span>Este site ainda se encontra em desenvolvimento.</span>
    </div>
  );
};

export default Hero;
