// import "./styles.css";
import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "2016",
    PrivateJob: 4000,
    GovernmentJOb: 2400,
    HigherEduation: 2400,
    startup: 1000,
  },
  {
    name: "2017",
    PrivateJob: 3000,
    GovernmentJOb: 2800,
    HigherEduation: 2100,
    startup: 2000,
  },
  {
    name: "2018",
    PrivateJob: 2000,
    GovernmentJOb: 3400,
    HigherEduation: 2900,
    startup: 1500,
  },
  {
    name: "2019",
    PrivateJob: 400,
    GovernmentJOb: 2990,
    HigherEduation: 3400,
    startup: 1050,
  },
  {
    name: "2020",
    PrivateJob: 4000,
    GovernmentJOb: 2400,
    HigherEduation: 2400,
    startup: 1000,
  },
  {
    name: "2021",
    PrivateJob: 4000,
    GovernmentJOb: 2400,
    HigherEduation: 2400,
    startup: 1000,
  },
  {
    name: "2022",
    PrivateJob: 4000,
    GovernmentJOb: 2400,
    HigherEduation: 2400,
    startup: 1000,
  },
];

export default function chartBar() {
  return (
    <BarChart
      style={{ position: "absolute", marginTop: "200px", marginLeft: "600px" }}
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="PrivateJob" fill="#8884d8" />
      <Bar dataKey="GovernmentJOb" fill="#82ca9d" />
      <Bar dataKey="HigherEduation" fill="#82ca9d" />
      <Bar dataKey="startup" fill="#8884d8" />
    </BarChart>
  );
}
