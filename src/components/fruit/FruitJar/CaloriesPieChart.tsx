import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { Fruit } from "../../../types/fruit";

interface CaloriesPieChartProps {
  fruits: Fruit[];
}

export const CaloriesPieChart: React.FC<CaloriesPieChartProps> = ({
  fruits,
}) => {
  const data = fruits.reduce((acc, fruit) => {
    const existing = acc.find((item) => item.name === fruit.name);
    if (existing) {
      existing.calories += fruit.nutritions.calories;
    } else {
      acc.push({ name: fruit.name, calories: fruit.nutritions.calories });
    }
    return acc;
  }, [] as { name: string; calories: number }[]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#00876c",
    "#439981",
    "#6aaa96",
    "#8cbcac",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "#ffa600",
    "#ec9c9d",
    "#e67f83",
    "#de6069",
    "#d43d51",
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="calories"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};
