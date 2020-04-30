import React, { Component } from "react";
import { Layout, Row, Col, Tabs } from "antd";
import Chaat from "./Chaat";
import Chartt from "./Chartt";
import Tablle from "./Tablle";
const { Header, Footer, Sider, Content } = Layout;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider></Sider>
          <Content className="content">
            <div>
              <Tabs onChange={callback}>
                <TabPane tab="Daily" key="1">
                  <Content>
                    <Chartt />
                  </Content>
                </TabPane>
                <TabPane tab="Weekly" key="2">
                  <Content>
                    <h1>ksdfsdjfj</h1>
                  </Content>
                </TabPane>
                <TabPane tab="Monthly" key="3">
                  <Content>
                    <Chartt />
                  </Content>
                </TabPane>

                <TabPane tab="Yearly" key="4">
                  <Content>
                    <Chartt />
                  </Content>
                </TabPane>
              </Tabs>
            </div>
            <div className="heading">
              <Row>
                <Col span={15} offset={2}>
                  <h1> new notifications</h1>
                  <Content>
                    <Tablle />
                  </Content>
                </Col>
                <Col span={5} offset={2}>
                  <h1>Users</h1>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LandingPage;
