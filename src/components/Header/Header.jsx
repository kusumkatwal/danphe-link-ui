import "./Header.css";
// import { PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiYoutubeLogo } from "react-icons/pi";
import { FaYoutube,  FaFacebook,  FaLinkedin, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <span class="material-symbols-outlined">location_on</span>
        <p>Kamalpokhari, Kathmandu, Nepal</p>
        <span> | </span>
        <span class="material-symbols-outlined">mail</span>
        <p>info@danphelink.com.np</p>
      </div>
      <div className="header-right">
        <div><span>Follow Us On:</span>
            <div className="icons"><FaFacebook className="header-icon"/>
            <FaInstagram className="header-icon"/>
            <FaLinkedin className="header-icon"/>
            <FaYoutube className="header-icon"/></div>
           </div>

      </div>
    </div>
  );
}

export default Header;
