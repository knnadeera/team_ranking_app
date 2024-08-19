import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ILineChartData } from "../../utils/interfaces/chart.interface";
import moment from "moment";

interface IProp {
  chartData: ILineChartData[];
}

const SimpleLineChart = ({ chartData }: IProp) => {
  const CustomizedXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`} className="text-center">
        <text dy={16} x={0} textAnchor="middle" fill="#666">
          {moment(payload.value).format("MMM")}
        </text>
        <text dy={32} x={0} textAnchor="middle" fill="#666">
          {moment(payload.value).format("YY")}
        </text>
      </g>
    );
  };

  // Custom Legend Component
  const CustomLegend: React.FC<{ payload?: any }> = ({ payload }) => {
    return (
      <div className="custom-legend">
        {payload?.map((entry: any, index: number) => (
          <div key={`item-${index}`} style={{ marginBottom: "5px" }}>
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            ></span>
          </div>
        ))}
      </div>
    );
  };

  const minValue = Math.min(...chartData.map((data) => data.value));
  const maxValue = Math.max(...chartData.map((data) => data.value));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#78828e"
          vertical={false}
        />
        <XAxis
          dataKey="date"
          interval={0} // Force ticks for every data point (each month)
          tick={<CustomizedXAxisTick />}
        />
        <YAxis
          domain={[minValue, maxValue]}
          tickFormatter={(value) => value}
          allowDecimals={false}
        />
        <Tooltip
          labelFormatter={(date) => moment(date).format("MMM YYYY")} // Format tooltip labels as "Jan 2024"
        />
        <Legend content={<CustomLegend />} />
        <Line dataKey="value" stroke="#919aa1" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
