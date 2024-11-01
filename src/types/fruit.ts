export interface Nutrition {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  }
  
  export interface Fruit {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
    nutritions: Nutrition;
  }
  
  export type GroupByOption = 'None' | 'Family' | 'Order' | 'Genus';
  export type ViewType = 'list' | 'table';