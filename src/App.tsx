import { useState } from 'react';
import { useFruits } from './hooks/useFruits';
import { FruitList } from './components/fruit/FruitList/FruitList';
import { FruitJar } from './components/fruit/FruitJar/FruitJar';
import { Select } from './components/common/Select';
import { Loading } from './components/common/Loading';
import { Fruit, GroupByOption, ViewType } from './types/fruit';
import { MainLayout } from './components/layout/MainLayout';

const App = () => {
  const { fruits, loading, error } = useFruits();
  const [groupBy, setGroupBy] = useState<GroupByOption>('None');
  const [viewType, setViewType] = useState<ViewType>('list');
  const [jarFruits, setJarFruits] = useState<Fruit[]>([]);
  const [showPieChart, setShowPieChart] = useState(false);

  const handleAddFruit = (fruit: Fruit) => {
    setJarFruits(prev => [...prev, fruit]);
  };

  const handleAddGroup = (groupFruits: Fruit[]) => {
    setJarFruits(prev => [...prev, ...groupFruits]);
  };

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex gap-4">
          <Select
            label="Group by"
            value={groupBy}
            onChange={(value) => setGroupBy(value as GroupByOption)}
            options={['None', 'Family', 'Order', 'Genus']}
          />
          
          <Select
            label="View"
            value={viewType}
            onChange={(value) => setViewType(value as ViewType)}
            options={['list', 'table']}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <FruitList
              fruits={fruits}
              groupBy={groupBy}
              viewType={viewType}
              onAddFruit={handleAddFruit}
              onAddGroup={handleAddGroup}
            />
          </div>
          
          <div>
            <FruitJar
              fruits={jarFruits}
              showPieChart={showPieChart}
              onTogglePieChart={() => setShowPieChart(!showPieChart)}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default App