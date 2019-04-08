import React, { Component } from "react";
import AccordionSub from "./AccordionSub";

class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      accordionArray: [],
      description: ""
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onAddAccordionClick = this.onAddAccordionClick.bind(this);
  }
  onChangeHandle(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  onAddAccordionClick() {
    let accordionArr = this.state.accordionArray;
    accordionArr.push({
      question: this.state.title,
      answer: this.state.description,
      number: Math.random()
        .toString(36)
        .substring(2, 15)
    });
    // console.log(accordionArr, "after");
    this.setState({
      accordionArray: accordionArr,
      title: "",
      description: ""
    });

    //flush values
  }
  render() {
    return (
      <div className="accordion">
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChangeHandle}
          placeholder="Enter Title Here !"
        />
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.onChangeHandle}
          placeholder="Description !"
        />
        <div className="btnC">
          <button onClick={this.onAddAccordionClick}>Add Accordion</button>
        </div>
        {this.state.accordionArray.map(item => {
          return (
            <AccordionSub
              number={item.number}
              headertitle={item.question}
              pdescription={item.answer}
            />
          );
        })}
      </div>
    );
  }
}
export default Accordion;
