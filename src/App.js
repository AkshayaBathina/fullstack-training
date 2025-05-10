import React, { useState, useEffect } from 'react';
import Header from './Header';
import FoodList from './FoodList';
import FoodModal from './FoodModal';
import Loader from './Loader';
import FoodForm from './FoodForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editFood, setEditFood] = useState(null);

  useEffect(() => {
    const dummyFoods = [
      { id: 1, name: 'Pizza Margherita', price: 250 },
      { id: 2, name: 'Veg Burger', price: 150 },
      { id: 3, name: 'Paneer Wrap', price: 180 },
    ];
    setTimeout(() => {
      setFoods(dummyFoods);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddFood = (newFood) => {
    setFoods(prevFoods => [...prevFoods, newFood]);
    toast.success(`${newFood.name} added to menu!`);
    setModalOpen(false);
  };

  const handleUpdateFood = (updatedFood) => {
    const updatedFoods = foods.map(food =>
      food.id === updatedFood.id ? updatedFood : food
    );
    setFoods(updatedFoods);
    toast.info(`${updatedFood.name} updated!`);
    setModalOpen(false);
    setEditFood(null);
  };

  const handleDeleteFood = (foodId) => {
    const confirmed = window.confirm('Are you sure you want to delete this food item?');
    if (confirmed) {
      const remainingFoods = foods.filter(food => food.id !== foodId);
      setFoods(remainingFoods);
      toast.error('Food item deleted.');
    }
  };

  const openEditModal = (food) => {
    setEditFood(food);
    setModalOpen(true);
  };

  return (
    <div className="app">
      <Header
        title="TastyExpress"
        subtitle="Delicious food delivered to your door"
        onAddFood={() => { setModalOpen(true); setEditFood(null); }}
      />

      <main className="main-content">
        {loading ? <Loader /> : (
          <FoodList foods={foods} onEdit={openEditModal} onDelete={handleDeleteFood} />
        )}
      </main>

      <FoodModal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditFood(null); }}
        title={editFood ? 'Edit Food' : 'Add Food'}
      >
        <FoodForm onSubmit={editFood ? handleUpdateFood : handleAddFood} initialValues={editFood} />
      </FoodModal>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar newestOnTop />

      <footer className="footer">
        <p>&copy; 2025 TastyExpress. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
