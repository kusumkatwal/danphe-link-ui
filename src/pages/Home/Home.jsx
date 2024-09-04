import "./Home.css";
import Banners from "../Home/banners";
import { useRef } from "react";
import Slider from "react-slick";
import Banner from "../../components/Banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EmptyArrow = () => <span style={{ display: "none" }}></span>;

function Home() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0",
    slidesToScroll: 1,
    prevArrow: <EmptyArrow />,
    nextArrow: <EmptyArrow />,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 2000,
  };

  return (
    <div className="home">
      <Slider ref={sliderRef} {...settings}>
        {Banners.map((banner, index) => (
          <div className="hero" key={index}>
            <Banner key={index} index={index} data={banner} />
          </div>
        ))}
      </Slider>
     
        {/* <Footer /> */}
    </div>
  );
}

export default Home;
