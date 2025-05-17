import React from 'react';
import FoodCard from './FoodCard';

const FoodList = ({ foods, onEdit, onDelete }) => (
  <div className="food-list">
    {foods.map(food => (
      <FoodCard
        key={food.id}
        food={food}
        onEdit={onEdit}
        onDelete={onDelete}
        editable={!!onEdit && !!onDelete}
      />
    ))}
  </div>
);

export default FoodList;
