import React from 'react';
import FoodCard from './FoodCard';

const FoodList = ({ foods, onEdit, onDelete, onAddToCart, cartItems, onIncrement, onDecrement }) => (
  <div className="food-list">
    {foods.map(food => {
      const cartItem = cartItems?.find(item => item.id === food.id);
      return (
        <FoodCard
          key={food.id}
          food={food}
          onEdit={onEdit}
          onDelete={onDelete}
          onAddToCart={onAddToCart}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          quantity={cartItem?.quantity}
          editable={!!onEdit && !!onDelete}
        />
      );
    })}
  </div>
);
export default FoodList;