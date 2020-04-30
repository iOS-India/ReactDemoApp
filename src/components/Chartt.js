import React, { Component } from "react";

import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { Row, Col, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
class Chartt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [
          "jan",
          "feb",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "sept",
          "oct",
          "nov",
          "dec"
        ],
        datasets: [
          {
            legend: "laundary",
            data: [1000, 500, 622, 325, 289, 454, 898, 787, 656, 131, 656, 465],
            backgroundColor: [
              "orange",
              "blue",
              "green",
              "red",
              "aqua",
              "ivory",
              "purple",
              "gold",
              "brown",
              "orange",
              "orange",
              "magenta"
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <Layout>
        <Content>
          <Row>
            <Col span={15} offset={2}>
              <Bar height={100} data={this.state.chartData} />
            </Col>
            <div className="chart">
              <Doughnut
                data={this.state.chartData}
                options={{
                  legend: {
                    display: false
                  }
                }}
              />
            </div>
          </Row>
        </Content>
      </Layout>
    );
  }
}
export default Chartt;
