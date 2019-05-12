import React from "react";

class Accordion extends React.Component {
  state = { isActive: "" };

  onClick = e => {
    const { value } = e.currentTarget;
    if (this.state.isActive === value) {
      return this.setState({ isActive: "" });
    }
    this.setState({ isActive: value });
  };
  render() {
    const { className, data } = this.props;
    return (
      <div className={`accordion ${className ? className : ""}`} id="accordion">
        {data.map((info, index) => (
          <div className="card">
            <div
              className={`card-header ${
                this.state.isActive === `collapse${index}` ? "active" : ""
              }`}
              id={`heading${index}`}
            >
              <button
                onClick={this.onClick}
                className="btn btn-link collapsed px-4 mr-2"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
                value={`collapse${index}`}
              >
                {info.title}
              </button>
            </div>
            <div
              id={`collapse${index}`}
              className="collapse"
              aria-labelledby={`heading${index}`}
              data-parent="#accordion"
            >
              <div className="card-body">{info.text}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Accordion;
