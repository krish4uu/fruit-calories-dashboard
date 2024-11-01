import { Fruit } from '../types/fruit';

export const groupByField = (fruits: Fruit[], field: string | null) => {
  if (!field || field === 'None') return { None: fruits };
  
  return fruits.reduce((acc, fruit) => {
    let key: string;
    switch (field) {
      case 'Family':
        key = fruit.family;
        break;
      case 'Order':
        key = fruit.order;
        break;
      case 'Genus':
        key = fruit.genus;
        break;
      default:
        key = 'Other';
    }
    
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(fruit);
    return acc;
  }, {} as Record<string, Fruit[]>);
};