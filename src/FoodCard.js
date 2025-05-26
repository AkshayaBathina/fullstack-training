import React from 'react';

const FoodCard = ({
  food,
  onEdit,
  onDelete,
  editable,
  onAddToCart,
  onIncrement,
  onDecrement,
  quantity
}) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-image" />
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>

      {editable && (
        <div className="card-actions">
          <button onClick={() => onEdit(food)}>Edit</button>
          <button onClick={() => onDelete(food.id)} className="delete-button">Delete</button>
        </div>
      )}

      {!editable && (
        <div className="card-actions">
          {typeof quantity === 'number' ? (
            <div className="cart-actions">
              <button onClick={() => onDecrement(food.id)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => onIncrement(food.id)}>+</button>
            </div>
          ) : (
            <button onClick={() => onAddToCart(food)}>Add to Cart</button>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodCard;