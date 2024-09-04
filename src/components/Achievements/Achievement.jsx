import "./Achievement.css";
import object from "./object";

function Achievement()
{
    return(<div className="achievement-section">
        <p className="upper-tag" id="tag">World Wide Achievement</p>
        <h1 id="heading">
            Grow Your <span>Skills </span>To<br/> Advance Your Career Path
          </h1>
        <div className="card-section">
            {
                object.map((item) => {
                    return(<div className="card">
                      <p className="icon">{item.icon}</p>
                        <p className="item">{item.number}</p>
                        <p className="keyword">{item.title}</p>
                    </div>)
                })
            }
        </div>

    </div>)
}

export default Achievement;