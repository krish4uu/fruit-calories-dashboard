import { Fruit } from "../../../types/fruit";
import { Button } from "../../common/Button";

interface FruitTableProps {
  fruits: Fruit[];
  onAdd: (fruit: Fruit) => void;
}

export const FruitTable: React.FC<FruitTableProps> = ({ fruits, onAdd }) => (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Family</th>
          <th className="p-2 text-left">Order</th>
          <th className="p-2 text-left">Genus</th>
          <th className="p-2 text-left">Calories</th>
          <th className="p-2"></th>
        </tr>
      </thead>
      <tbody>
        {fruits.map((fruit) => (
          <tr key={fruit.id} className="border-b">
            <td className="p-2">{fruit.name}</td>
            <td className="p-2">{fruit.family}</td>
            <td className="p-2">{fruit.order}</td>
            <td className="p-2">{fruit.genus}</td>
            <td className="p-2">{fruit.nutritions.calories}</td>
            <td className="p-2">
              <Button onClick={() => onAdd(fruit)}>Add</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
);
