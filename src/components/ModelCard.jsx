import React from "react";
import Modal from "react-modal";
const ModelCard = ({
  image,
  title,
  price,
  handleShowModal,
  handleCloseModal,
  show,
  whatIsIt,
  whatDoesItInvolve,
  isThereDowntime
}) => (
  <div
    className="model-card position-relative"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div />
    <div>
      <p>{title}</p>
      <p>{`from ${price}`}</p>
      <button onClick={handleShowModal}>MORE INFO</button>
    </div>
    <Modal isOpen={show} onRequestClose={handleCloseModal}>
      <div className="d-flex h-100">
        <div className="modal-image-container h-100">
          <div
            className="modal-image h-100"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="modal-info">
          <button onClick={handleCloseModal}>X</button>
          <h3>{title}</h3>
          <h5>WHAT IS IT: </h5>
          <p>{whatIsIt}</p>
          <h5>WHAT DOES IT INVOLVE:</h5>
          <p>{whatDoesItInvolve}</p>
          <h5>IS THERE ANY DOWNTIME:</h5>
          <p>{isThereDowntime}</p>
          <span>{`From ${price}`}</span>
          <button onClick={handleCloseModal}>BE A MODEL PATIENT</button>
        </div>
      </div>
    </Modal>
  </div>
);

export default ModelCard;
