import "./styles.css";

import reactjs from "../../assets/images/reactjs.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Olá, sou o <span>Jeffrey</span>
      </h1>
      <h2>
        <div className="stack-badge">
          <img src={reactjs} alt="React JS" />
        </div>
        react js
      </h2>
    </div>
  );
};

export default Hero;
