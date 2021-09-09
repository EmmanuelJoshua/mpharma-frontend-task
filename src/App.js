import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import ProductsTable from './components/ProductsTable';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductsTable />
    </div>
  );
}

export default App;
