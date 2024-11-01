import { Fruit } from "../../../types/fruit";
import { Button } from "../../common/Button";
import { CaloriesPieChart } from "./CaloriesPieChart";

interface FruitJarProps {
    fruits: Fruit[];
    showPieChart: boolean;
    onTogglePieChart: () => void;
  }
  
  export const FruitJar: React.FC<FruitJarProps> = ({ 
    fruits, 
    showPieChart, 
    onTogglePieChart 
  }) => {
    const totalCalories = fruits.reduce(
      (sum, fruit) => sum + fruit.nutritions.calories, 
      0
    );
  
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Fruit Jar</h2>
        <div className="mb-4">
          <Button onClick={onTogglePieChart}>
            {showPieChart ? 'Hide Chart' : 'Show Chart'}
          </Button>
        </div>
        
        {showPieChart && fruits.length > 0 && (
          <div className="mb-4">
            <CaloriesPieChart fruits={fruits} />
          </div>
        )}
  
        <div className="mb-4">
          <strong>Total Calories: </strong>
          {totalCalories}
        </div>
  
        <div className="space-y-2">
          {fruits.map((fruit, index) => (
            <div key={`${fruit.id}-${index}`} className="p-2 bg-gray-50 rounded">
              {fruit.name} ({fruit.nutritions.calories} calories)
            </div>
          ))}
        </div>
      </div>
    );
  };