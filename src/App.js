import React, { useState, useEffect } from 'react';
import Header from './Header';
import UserList from './UserList';
import UserModal from './UserModal';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import UserForm from './UserForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    toast.success(`User ${newUser.name} added!`);
    setModalOpen(false);
  };

  return (
    <div className="app">
      <Header onAddUser={() => setModalOpen(true)} />
      {loading ? <Loader /> : error ? <ErrorMessage message={error} /> : <UserList users={users} />}
      <UserModal open={modalOpen} onClose={() => setModalOpen(false)} title="Add User">
        <UserForm onSubmit={handleAddUser} />
      </UserModal>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar newestOnTop />
    </div>
  );
}

export default App;