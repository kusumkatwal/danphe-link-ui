import "./Banner.css";
const tagColors = [' #e96128', '#6c8c96',' #e96128' , '#6c8c96']

function Banner({index, data}) {
  return (
    <div className="banner">
      <div className="banner-left">
        <p className="tag" style={{ backgroundColor: tagColors[index % tagColors.length] }}>{data.tag}</p>
        <h1 style={{margin: 0}}>{data.title}</h1>
        <h1 style={{ color: tagColors[index % tagColors.length], margin:0 }} className="coloredtext">{data.coloredtitle}</h1>
        <div className="keypoint-card">
        {data.keypoints.map((tag, index) => (
          <TagCard key={index} data={tag} />
        ))}
        </div>
        <button style={{ backgroundColor: tagColors[index % tagColors.length] }}className="banner-bottom">Explore Now</button>
      </div>
      <div className="banner-right">
        <div className="background"></div>
        <div className="background2"></div>
        <img src={data.image} alt="Slide" className="image" />
      </div>
      
    </div>
  );
}
function TagCard(props) {
  return (
    <div className="tag-card">
      <div className="tag-card-icon">{props.data.icon}</div>
      <div className="tag-card-text">{props.data.text}</div>
    </div>
  );
}
export default Banner;
