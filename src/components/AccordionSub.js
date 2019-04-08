import React, { Component } from "react";

class AccordionSub extends Component {
  constructor() {
    super();
    this.state = {
      isopen: "true"
    };
    this.accordianfun = this.accordianfun.bind(this);
  }

  accordianfun() {
    this.setState({
      isopen: this.state.isopen === "true" ? "fasle" : "true"
    });
  }
  render() {
    return (
      <div
        id={this.props.number}
        className="accordion-section"
        onClick={this.accordianfun}
      >
        <h2 className="accordion-one">{this.props.headertitle}</h2>
        <div
          className="panel"
          style={
            this.state.isopen === "true"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <p>{this.props.pdescription}</p>
        </div>
      </div>
    );
  }
}
export default AccordionSub;
