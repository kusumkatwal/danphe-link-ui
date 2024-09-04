import "./Discover.css";
import student from "../../assets/student-6027004_1280.jpg"
function Discover() {
  return (
    <div className="discover">

        <div className="discover-section-left">
            <img src={student} alt="student"/>
        </div>
        <div className="discover-section-right">
          <p className="upper-tag">get to know about us</p>
          <h1 id="heading" style={{textAlign:"left"}}>
            Discover Top <span>IT Solutions</span>Around The World
          </h1>
          <p className="discover-text">
            At Danphelink, we are committed to excellence in the fields of Web
            Development, Cyber Security, 3d Animation & VFX, Artificial
            Intelligence, Data Science, and Blockchain Technology. With over a
            decade of experience, we offer cutting-edge solutions tailored to
            meet the diverse needs of our clients.
          </p>
          <div className="discover-icon">
            <div className="left">
              <span class="material-symbols-outlined" id="icon">support_agent</span>
              <span>15+<br/>Expert Profesionals</span>
            </div>
            <div className="right">
              <span class="material-symbols-outlined"id="icon">description</span>
              <span>5+ <br/>Successful Projects</span>
            </div>
          </div>
          <button className="course-button" id="discover-button">Discover More</button>
        </div>
      </div>
  );
}

export default Discover;
