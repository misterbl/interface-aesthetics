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
    return (
      <div className="accordion" id="accordion">
        {this.props.data.map((info, index) => (
          <div className="card">
            <div
              className={`card-header ${
                this.state.isActive === `collapse${index}` ? "active" : ""
                }`}
              id={`heading${index}`}
            >
              <h2 className="mb-0 mr-2">
                <button
                  onClick={this.onClick}
                  className="btn btn-link collapsed px-4"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                  value={`collapse${index}`}
                >
                  {info.title}
                </button>
              </h2>
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
