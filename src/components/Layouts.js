import React from "react";
import { Layout, Breadcrumb, Button, Menu } from "antd";
import { Table, Tag } from "antd";
import Tablle from "./Tablle";
import Meenu from "./Meenu";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function Layouts() {
  const handleClick = e => {
    console.log("click ", e);
  };

  return (
    <div>
      <Layout>
        <Header className="header">Header</Header>
        <Layout>
          <Sider className="sider">
            <Menu
              onClick={handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    {/* <MailOutlined /> */}
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">
                    <Link to="/src/components/Tablle.js">Option1</Link>
                  </Menu.Item>
                  <Content></Content>
                  <Menu.Item key="3">
                    <Link to="/src/components/Tablle.js">Option2</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/src/components/Tablle.js">Option2</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/src/components/Tablle.js">Option2</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/src/components/Talble.js">Option2</Link>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>

          <Content className="padd">
            <Switch>
              <Route path="/src/components/Tablle.js">
                <Tablle />
              </Route>
              <Route path="/src/components/Tablle.js">
                <Tablle />
              </Route>
            </Switch>
          </Content>
        </Layout>

        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default Layouts;
