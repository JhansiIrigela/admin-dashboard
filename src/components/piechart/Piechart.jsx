import React from "react";
import "./piechart.scss";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "A", value: 40 },
  { name: "B", value: 35 },
  { name: "C", value: 25 },
];

const COLORS = ["#f1effb", "rgb(246,40,143)", "#623aea"];


const Piechart = () => {
  return (
    <div className="pieChart">
      <h1>Customers</h1>
      <p>Customers that buy products</p>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80} // Set the inner radius to create a doughnut chart
          outerRadius={130}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value="65% New Customers"
            position="center"
            fill="#000" // Color of the label text
            fontSize={15} // Font size of the label text
          />
        </Pie>
      </PieChart>
    </div>
  );
};

export default Piechart;
