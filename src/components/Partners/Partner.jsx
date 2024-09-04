import React, { useState, useRef } from "react";
// import PropTypes from 'prop-types';
import PartnerList from "./partners";
import Slider from "react-slick";
import Modal from "../Modal/Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partner.css";

const EmptyArrow = () => <span style={{ display: "none" }}></span>;

function Partner() {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isopen, setIsopen] = useState(false);

  const handleClick = (partner) => {
    setSelectedPartner(partner);
    setIsopen(true);
  };

  const handleCloseModal = () => {
    setSelectedPartner(null);
    setIsopen(false);
  };

  //const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="partner">
      <h1 id="heading">
        Our Trusted <span>Partner</span>
      </h1>
      <div className="partner-slide">
        {/* <Slider {...settings}> */}
        <div className="partner-section">
          {PartnerList.map((partner, index) => (
           
              <PartnerCard key={index} data={partner} onClick={handleClick} />
            
          ))}
          </div>
        {/* </Slider> */}
        {isopen && (
          <Modal partner={selectedPartner} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

function PartnerCard({ data, onClick }) {
  return (
    <div onClick={() => onClick(data)} className="partner-card">
      <img src={data.image} alt="partner-logo" />
      <p>{data.name}</p>
      <p className="text-back">View Details</p>
    </div>
  );
}

// PartnerCard.propTypes = {
//     data: PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//     }).isRequired,
//     onClick: PropTypes.func.isRequired,
// };

export default Partner;
