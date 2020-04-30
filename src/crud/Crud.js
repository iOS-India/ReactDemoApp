import "./Crud.css";

import React, { Component } from "react";
import ListItem from "./ListItem";
import { PoweroffOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.item, newItem];
      this.setState({
        item: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    {
      const deleteItems = this.state.item.filter(
        (eachItem) => eachItem !== key
      );
      this.setState({ item: deleteItems });
    }
  };
  update = (text, key) => {
    this.state.item.map((itemUpdate) => {
      if (itemUpdate.key === key) {
        itemUpdate.text = text;
      }
      this.setState({ item: itemUpdate });
    });
  };

  render() {
    return (
      <div className="DottedBox">
        <div className="DottedBox_content">
          <form
            onSubmit={this.addItem}
          >
            <input
              style={{
                height: "45px",
                width: "300px",
                fontSize: "20px",
              }}
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button
              style={{
                fontSize: "20px",
                paddingLeft: "20px",
                margin: "20px",
              }}
            >
              submit
            </button>
          </form>

          <ListItem
            newList={this.state.item}
            deleteItem={this.deleteItem}
            update={this.update}
          />
        </div>
      </div>
    );
  }
}

export default Crud;
