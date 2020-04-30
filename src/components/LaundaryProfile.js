import React, { Component } from "react";

import { Tabs, Radio, Row, Col } from "antd";
import Cart from "./Cart";

const { TabPane } = Tabs;

class LaundaryProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="laundaryProfile_1">
          <Tabs defaultActiveKey="1" size="large">
            <TabPane tab="Basic Info " key="1">
              <Row gutter={[32, 16]}>
                <Col span={8}></Col>
                <Col span={8}>
                  <Cart />
                </Col>
                <Col span={8}>ifgdfpg</Col>
              </Row>
            </TabPane>
            <TabPane tab="Buisness Info" key="2">
              Content of tab 2
            </TabPane>
            <TabPane tab="Working hours and slot" key="3">
              Content of tab 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LaundaryProfile;
