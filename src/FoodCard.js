import React from 'react';

const FoodCard = ({ food, onEdit, onDelete }) => (
  <div className="food-card">
    <h3>{food.name}</h3>
    <p>₹{food.price}</p>
    <div className="card-actions">
      <button onClick={() => onEdit(food)}>Edit</button>
      <button onClick={() => onDelete(food.id)} className="delete-button">Delete</button>
    </div>
  </div>
);

export default FoodCard;