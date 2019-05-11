import React from "react";
import Modal from "react-modal";
import { withRouter } from "react-router";
import ROUTES from "../const/routes";
import cross from "../assets/cross-grey.svg";
class ModelCard extends React.Component {
  state = {
    showModal: false
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  pushToModelForm = () => {
    this.props.history.push(ROUTES.BECOME_A_MODEL);
  };

  render() {
    const {
      image,
      title,
      price,
      whatIsIt,
      whatDoesItInvolve,
      isThereDowntime
    } = this.props;
    return (
      <div
        className="model-card position-relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div />
        <div>
          <p>{title}</p>
          <p>{`from ${price}`}</p>
          <button onClick={this.handleShowModal}>MORE INFO</button>
        </div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
        >
          <div className="d-flex h-100">
            <div className="d-none d-md-block w-100">
              <div
                className="modal-image"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
            <div className="modal-info">
              <button onClick={this.handleCloseModal}>
                <img src={cross} alt="close model card" className="w-25" />
              </button>
              <h3>{title}</h3>
              <h5>WHAT IS IT: </h5>
              <p>{whatIsIt}</p>
              <h5>WHAT DOES IT INVOLVE:</h5>
              <p>{whatDoesItInvolve}</p>
              <h5>IS THERE ANY DOWNTIME:</h5>
              <p>{isThereDowntime}</p>
              <span>{`From ${price}`}</span>
              <button onClick={this.pushToModelForm}>BE A MODEL PATIENT</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ModelCard);
