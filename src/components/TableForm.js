import React, { Component } from "react";
import { Row, Col } from "antd";

class TableForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  handleChange = event => {
    this.setState({
      data: event.target.value
    });
    console.log("skfgskldj");
    preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pick your favorite flavor:</label>
        <input type="submit" />
      </form>
    );
  }
}
export default TableForm;
