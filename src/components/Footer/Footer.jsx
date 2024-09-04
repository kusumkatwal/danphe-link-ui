import secondlogo from "../../assets/images/secondLogo.png";
// import { PiFacebookLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight, PiYoutubeLogoLight } from "react-icons/pi";
import { FaYoutube,  FaFacebook,  FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-section1">
          <img src={secondlogo} alt="secondlogo"></img>
          <p className="footer-top-section1-info">
            DanpheLink is an IT company with expertise in Web Development, Cyber
            Security, Animation, AI, Data Science and Blockchain Technology.
          </p>
          <p className="footer-top-section1-address">
            2nd Floor, Rem Work Building, Kamalpokhari 01, Kathmandu, Nepal
           
          </p>
          <p className="footer-top-section1-contact">
          +977-9707861393 <br/>+977-9707861394
          </p>
          <p className="socials">
            <FaFacebook className="footer-icon"/>
            <FaInstagram className="footer-icon"/>
            <FaLinkedin className="footer-icon"/>
            <FaYoutube className="footer-icon"/>
          </p>
        </div>
        <div className="footer-top-section2">
          <h1>Resources</h1>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Help and FAQs</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="footer-top-section3">
            <h1>Courses</h1>
            <ul>
              <li>Web Development</li>
              <li>Cyber Security</li>
              <li>3D and VFX</li>
            </ul>
        </div>
        <div className="footer-top-section4">
            <h1>Working Hours</h1>
            <ul>
              <li className="border">
                <span>Sun-Fri     </span>
                7:00 AM - 7:00 PM
              </li>
              <li>
                <span>Sat     </span>
                10:00 AM - 7:00 PM
              </li>
            </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">Copyright © 2024 danphelink. All rights reserved.</div>
        <div className="footer-bottom-right">Privacy Policy
        Terms Conditions</div>
      </div>
    </div>
  );
}
export default Footer;
