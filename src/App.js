import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Splashscreen from './components/home/Splashscreen';
import Register from './components/home/Register';
import NewLogin from './components/home/NewLogin';
import NewSignUp from './components/home/NewSignUp';
import CategoriesPage from './components/categories/CategoriesPage';
import MotorcycleList from './components/motorcycles/MotorcycleList';
import MotorcycleDetails from './components/motorcycles/MotorcycleDetails';
import Navbar from './components/navigation/Navbar';
import Toggle from './components/navigation/Toggle';
import AddCategory from './components/crud/AddCategory';
import MyReservations from './components/reservations/myreservations';
import Reservation from './components/reservations/reservation';

const App = () => (
  <>
    <Routes>
      <Route path="/addcategory" element={<AddCategory />} />

      <Route path="/" element={<Splashscreen />} />
      <Route path="register" element={<Register />}>
        <Route path="login" element={<NewLogin />} />
        <Route path="signup" element={<NewSignUp />} />
      </Route>
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<MotorcycleList />} />
      <Route
        path="/categories/:id/motorcycles/:mid"
        element={<MotorcycleDetails />}
      />

      <Route path="*" element={<Navbar />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/add_category" element={<AddCategory />} />
      <Route path="/myreservations" element={<MyReservations />} />
      <Route path="/categories/:id/motorcycles/:mid/reservation" element={<Reservation />} />
    </Routes>
  </>
);

export default App;
