import "./Courses.css";
import Course from "./course";
import { useState } from "react";

function Courses() {
  const [coursefilter, setCourseFilter] = useState("all");

  // const[isactive, setIsactive] = useState('false');

  const handleClick = (filter) => {
    setCourseFilter(filter);
  };

  return (
    <div className="course">
      <div className="course-head">
        <h1 id="heading">
          Our <span>Featured </span>Courses
        </h1>
        <div className="course-nav">
          <p
            onClick={() => handleClick("all")}
            className={coursefilter === "all" ? "active-filter" : ""}
          >
            All Courses
          </p>
          <p
            onClick={() => handleClick("web development")}
            className={
              coursefilter === "web development" ? "active-filter" : ""
            }
          >
            Web Development
          </p>
          <p
            onClick={() => handleClick("cyber security")}
            className={coursefilter === "cyber security" ? "active-filter" : ""}
          >
            Cyber Security
          </p>
          <p
            onClick={() => handleClick("3d animation")}
            className={coursefilter === "3d animation" ? "active-filter" : ""}
          >
            3D Animation and VFX
          </p>
        </div>
       
      </div>

      <div className="course-main">
        {Course.map((course, index) => {
          return (
            (coursefilter === "all" || coursefilter === course.tag) && (
              <div className="course-card">
                <div className="course-image">
                  {" "}
                  <img src={course.image} alt="course" />
                </div>
                <p className="course-title">
                  {course.title}
                  <br />
                  Duration :
                  <span className="course-duration">
                    {" " + course.duration}
                  </span>
                </p>
              </div>
              
            )
          );
        })}
      </div>
      <button className="course-button">Explore all courses</button>
    </div>
  );
}
export default Courses;
