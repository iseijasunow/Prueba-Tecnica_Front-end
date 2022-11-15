import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

/* recharts.org -> nunca lo había usado antes */

export const Graphs = ({ data }) => {
  return (
    <>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Bar type="monotone" dataKey="followers" fill="#8884d8" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" fontSize={11} />
        <YAxis dataKey="followers" />
      </BarChart>
    </>
  );
};
