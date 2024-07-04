import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="nav-items">
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> About </Link></li>          
          <li><Link to="/contact"> Contact </Link></li>
          <button className="login" onClick={() => {
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          }}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;