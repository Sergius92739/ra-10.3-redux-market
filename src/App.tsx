import React from 'react';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="container">
      <div className="link">
        <a href="https://fakestoreapi.com/products?limit=5" target="blanc">Фейковые данные о товарах</a>, взяты с сайта
        <a href='https://fakestoreapi.com/' target='blanc'> fakestoreapi.com</a>
      </div>
      <Form />
      <CardList />
    </div>

  );
}

export default App;
