import { Fruit, GroupByOption, ViewType } from "../../../types/fruit";
import { groupByField } from "../../../utils/groupBy";
import { Button } from "../../common/Button";
import { FruitListItem } from "./FruitListItem";
import { FruitTable } from "./FruitTable";

interface FruitListProps {
  fruits: Fruit[];
  groupBy: GroupByOption;
  viewType: ViewType;
  onAddFruit: (fruit: Fruit) => void;
  onAddGroup: (fruits: Fruit[]) => void;
}

export const FruitList: React.FC<FruitListProps> = ({
  fruits,
  groupBy,
  viewType,
  onAddFruit,
  onAddGroup,
}) => {
  const groupedFruits = groupByField(fruits, groupBy);

  console.log(groupedFruits);

  return (
    <div className="space-y-4 w-full ">
      {Object.entries(groupedFruits).map(([group, groupFruits]) => (
        <div key={group} className="border rounded">
          {groupBy !== "None" && (
            <div className="flex justify-between items-center bg-gray-100 p-2 grow">
              <h3 className="font-bold">{group}</h3>
              <Button onClick={() => onAddGroup(groupFruits)}>Add All</Button>
            </div>
          )}

          <div className="p-2">
            {viewType === "list" ? (
              <div className="space-y-2">
                {groupFruits.map((fruit) => (
                  <FruitListItem
                    key={fruit.id}
                    fruit={fruit}
                    onAdd={() => onAddFruit(fruit)}
                  />
                ))}
              </div>
            ) : (
              <div className="">
                <FruitTable fruits={groupFruits} onAdd={onAddFruit} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
