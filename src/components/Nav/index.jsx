import "./styles.css";

import brazil_flag from "../../assets/images/brazil_flag.png";
import canada_flag from "../../assets/images/canada_flag.png";

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <div className="item active">início</div>
      </div>
      <div className="languages">
        <div className="item" title="Português">
          <img src={brazil_flag} alt="PT-BR" />
        </div>
        <div className="item" title="English">
          <img src={canada_flag} alt="EN-CA" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
