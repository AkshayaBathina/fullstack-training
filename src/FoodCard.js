import React from 'react';

const fallbackImg = 'https://via.placeholder.com/400x300?text=No+Image';

const FoodCard = ({ food, onEdit, onDelete, editable }) => (
  <div className="food-card">
    <img
  src={food.image || fallbackImg}
  alt={food.name}
  className="food-image"
 onError={(e) => {
  if (e.target.src !== fallbackImg) {
    e.target.src = fallbackImg;
  }
}}
/>
    <h3>{food.name}</h3>
    <p>₹{food.price}</p>
    {editable && (
      <div className="card-actions">
        <button onClick={() => onEdit(food)}>Edit</button>
        <button onClick={() => onDelete(food.id)} className="delete-button">Delete</button>
      </div>
    )}
  </div>
);

export default FoodCard;