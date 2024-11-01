# Fruit Catalog

A modern React + TypeScript application for browsing and organizing fruits with their nutritional information. Built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- 📊 Dynamic data visualization with interactive pie charts
- 🔄 Multiple view options (list and table views)
- 📂 Flexible grouping options (by Family, Order, or Genus)
- 🧺 Virtual fruit jar for collecting and analyzing fruits
- 📈 Real-time calorie tracking
- 🎨 Modern UI with Tailwind CSS
- 💪 Full TypeScript support

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/krish4uu/fruit-calories-dashboard.git
cd fruit-calories-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Tech Stack

- **React**: Frontend library
- **TypeScript**: Static typing and enhanced developer experience
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library

## Core Components

### FruitList
- Displays fruits in either list or table view
- Supports grouping by Family, Order, or Genus
- "Add" button for each fruit
- "Add All" button for grouped fruits

### FruitJar
- Collects selected fruits
- Displays total calories
- Interactive pie chart showing calorie distribution
- Toggle-able chart view

### Common Components
- **Button**: Reusable button component with consistent styling
- **Select**: Dropdown component for view and grouping options
- **Loading**: Loading state indicator

## Data Management

- Fetches fruit data from an external API
- Custom `useFruits` hook for data fetching and state management
- TypeScript interfaces for type safety
- Grouping utility functions for data organization


