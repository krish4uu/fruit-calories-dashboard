import { Fruit } from "../../../types/fruit";
import { Button } from "../../common/Button";

interface FruitListItemProps {
    fruit: Fruit;
    onAdd: () => void;
  }
  
  export const FruitListItem: React.FC<FruitListItemProps> = ({ fruit, onAdd }) => (
    <div className="flex items-center justify-between p-2 border-b">
      <span>
        {fruit.name} ({fruit.nutritions.calories} calories)
      </span>
      <Button onClick={onAdd}>Add</Button>
    </div>
  );