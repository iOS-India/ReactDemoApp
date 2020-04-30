// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined
// } from "@ant-design/icons";
import React, { Component, Fragment } from "react";
import { Menu, Table, Layout } from "antd";
import Tablle from "./Tablle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Content } = Layout;

export default class Meenu extends Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return <div></div>;
  }
}
