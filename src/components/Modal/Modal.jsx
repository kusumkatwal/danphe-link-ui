import "./Modal.css";

const Modal = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-first-row">
          <div className="modal-first-row-left">
            <img src={partner.image} alt="logo" />
          </div>
          <div className="modal-first-row-right">
            <p className="modal-heading">About The Company</p>
            <p className="modal-description">{partner.description}</p>
          </div>
        </div>

        <div className="modal-second-row">
            <div className="modal-second-row-left">
                <h3>{partner.name}</h3>
                <a href={partner.website} target="#">Visit Website  <span class="material-symbols-outlined">
link
</span></a>
            </div>
            <div className="modal-second-row-right">
                <h4>Featured Services</h4>
                {partner.services.map((service) => {
                    return (<div className="service-card">
                        <p className="service-title">{service.title}</p>
                        <p className="service-details">{service.details}</p>
                    </div>)
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
