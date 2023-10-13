import "./graph.scss";
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
  { name: "Jan", value: 100, radius: [0, 10, 10, 0] },
  { name: "Feb", value: 200, radius: [0, 10, 10, 0] },
  { name: "Mar", value: 150, radius: [0, 10, 10, 0] },
  { name: "Apr", value: 300, radius: [0, 10, 10, 0] },
  { name: "May", value: 250, radius: [0, 10, 10, 0] },
  { name: "June", value: 200, radius: [0, 10, 10, 0] },
  { name: "July", value: 400, radius: [0, 10, 10, 0] },
  { name: "Aug", value: 500, radius: [0, 10, 10, 0] },
  { name: "Sep", value: 100, radius: [0, 10, 10, 0] },
  { name: "Oct", value: 250, radius: [0, 10, 10, 0] },
  { name: "Nov", value: 150, radius: [0, 10, 10, 0] },
  { name: "Dec", value: 200, radius: [0, 10, 10, 0] },
];

const Graph = () => {
  return (
    <div className="graph">
      <h1>Overview</h1>
      <p>Monthly Earning</p>
      <BarChart width={600} height={350} data={data}>
        <XAxis hide={true} />
        <YAxis hide={true} />
        <CartesianGrid stroke="transparent" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Graph;
