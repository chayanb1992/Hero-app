import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const RatingsBarChart = ({ ratings }) => {
  const ratingsData = [
    { stars: ratings[4].name, count: ratings[4].count },
    { stars: ratings[3].name, count: ratings[3].count },
    { stars: ratings[2].name, count: ratings[2].count },
    { stars: ratings[1].name, count: ratings[1].count },
    { stars: ratings[0].name, count: ratings[0].count },
  ];
  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Ratings</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={ratingsData}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="stars"
            tick={{ fontSize: 12 }}
            width={60}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#F97316" radius={[4, 4, 4, 4]}>
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsBarChart;
