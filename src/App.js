import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FoodList from './FoodList';
import FoodModal from './FoodModal';
import Loader from './Loader';
import FoodForm from './FoodForm';
import foodService from './Services/FoodService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/menu">View Menu</Link>
      <Link to="/manage">Manage Menu</Link>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="hero">
      <h1 className="hero-title">TastyExpress</h1>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="home-page">
        <h2>Welcome to TastyExpress</h2>
        <p>Explore our menu and order your favorite dishes.</p>
        <Link to="/menu">
          <button className="hero-button">View Menu</button>
        </Link>
      </div>
    </>
  );
}
function MenuPage({ foods, loading, cartItems, onAddToCart, onIncrement, onDecrement }) {
  return (
    <main className="main-content">
      {loading ? (
        <Loader />
      ) : (
        <FoodList
          foods={foods}
          cartItems={cartItems}
          onAddToCart={onAddToCart}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
    </main>
  );
}

function ManagePage({ foods, onEdit, onDelete, onAdd }) {
  return (
    <main className="main-content">
      <button className="hero-button" onClick={onAdd}>Add Food Item</button>
      <FoodList foods={foods} onEdit={onEdit} onDelete={onDelete} />
    </main>
  );
}

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editFood, setEditFood] = useState(null);
   const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
    foodService.getFoods().then(data => {
      setFoods(data);
      setLoading(false);
    });
  }, []);

  const handleAddFood = (newFood) => {
    const foodWithId = { ...newFood, id: Date.now() };
    setFoods(prev => [...prev, foodWithId]);
    toast.success(`${newFood.name} added!`);
    setModalOpen(false);
  };

  const handleUpdateFood = (updatedFood) => {
    const updatedList = foods.map(food =>
      food.id === updatedFood.id ? updatedFood : food
    );
    setFoods(updatedList);
    toast.info(`${updatedFood.name} updated!`);
    setModalOpen(false);
    setEditFood(null);
  };

  const handleDeleteFood = (id) => {
    const confirmed = window.confirm('Delete this item?');
    if (confirmed) {
      setFoods(prev => prev.filter(food => food.id !== id));
      toast.error('Item deleted.');
    }
  };

  const openEditModal = (food) => {
    setEditFood(food);
    setModalOpen(true);
  };

  const handleAddToCart = (food) => {
  setCartItems(prev => {
    const existing = prev.find(item => item.id === food.id);
    if (existing) {
      return prev.map(item =>
        item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prev, { ...food, quantity: 1 }];
    }
  });
  toast.success(`${food.name} added to cart`);
};
const handleIncrement = (id) => {
  setCartItems(prev =>
    prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
  );
};

const handleDecrement = (id) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
  );
};
  return (
    <Router>
      <div className="app">
        <Navigation />

        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route
  path="/menu"
  element={
    <MenuPage
      foods={foods}
      loading={loading}
      cartItems={cartItems}
      onAddToCart={handleAddToCart}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
      }
/>
          <Route
            path="/manage"
            element={
              <ManagePage
                foods={foods}
                onEdit={openEditModal}
                onDelete={handleDeleteFood}
                onAdd={() => { setModalOpen(true); setEditFood(null); }}
              />
            }
          />
        </Routes>

        <FoodModal
          open={modalOpen}
          onClose={() => { setModalOpen(false); setEditFood(null); }}
          title={editFood ? 'Edit Food' : 'Add Food'}
        >
          <FoodForm onSubmit={editFood ? handleUpdateFood : handleAddFood} initialValues={editFood} />
        </FoodModal>

        <ToastContainer position="top-center" autoClose={2000} />

        <footer className="footer">
          <p>&copy; 2025 TastyExpress. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;