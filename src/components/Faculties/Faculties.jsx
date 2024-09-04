import "./Faculties.css";
import members from "./facultymembers";
import { RxShare1 } from "react-icons/rx";

function Faculties() {
  return (
    <div className="faculties">
      <p className="upper-tag" id="faculty-tag">Our Qualified People</p>
      <div className="first-row">
        <h1 className="faculty-heading">
          Top CLass <span>Globally Recognized </span>Faculties
        </h1>
        <button className="course-button">All faculties</button>
      </div>
      <div className="faculties-slide">
        {members.map((member) => {
          return (
            <div className="faculty">
              <img src={member.image} alt="faculy memeber" />
              <div className="last-row">
                <div className="last">
                  <p className="name"> {member.name}</p>
                  <p className="position">{member.department}</p>
                </div>
                <RxShare1 className="share-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faculties;
