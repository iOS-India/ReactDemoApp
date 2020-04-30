import { Input } from "antd";
import React, { Component } from "react";
import { Layout } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import LaundaryProfile from "./LaundaryProfile";
import FormLayoutDemo from "./AddNewCity";
import Default from "./Default";
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

class CategoryPricing extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content>
            <div className="cateContainer">
              <h1>
                {" "}
                <Link to="/src/components/LaundaryProfile.js">
                  Laundary Profile
                </Link>{" "}
              </h1>
              <h1>
                <Link to="/src/components/Default.js">
                  {" "}
                  Categories and Pricing
                </Link>
              </h1>
              <Search
                style={{ width: 200 }}
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
            <div className="cateContainer_2"></div>
          </Content>
        </Layout>
        <Switch>
          <Route
            path="/src/components/LaundaryProfile.js"
            component={LaundaryProfile}
          />
          <Route path="/src/components/Default.js" component={Default} />
        </Switch>
      </div>
    );
  }
}

export default CategoryPricing;
