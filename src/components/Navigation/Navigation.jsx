import { NavLink, Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Navigation.css";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">
          Courses <MdOutlineArrowDropDown className="nav-icon" />
          <ul className="dropdown">
            <li>
              <Link to="/">All Courses</Link>
            </li>
          </ul>
        </NavLink>
        <NavLink to="/">
          About Us
          <MdOutlineArrowDropDown className="nav-icon"/>
          <ul className="dropdown">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Our Facilities</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </NavLink>

        <NavLink to="/">Contact</NavLink>
      </div>
      <div className="nav-end">
        <input type="text" placeholder="Search For Courses...."></input>
        <Link className="button" id="apply-button" to="/form">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
