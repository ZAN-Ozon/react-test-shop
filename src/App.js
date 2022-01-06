import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';


  function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
      fetch('https://61d5f0c36cb45e001718e0a0.mockapi.io/items').then((res) => {
        return res.json();
      }).then((json) =>{
        setItems(json);
      });
    },[]);

    const onAddToCart = (obj) =>{
      setCartItems([...cartItems, obj]);
    };
    
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => {setCartOpened(false)}}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="div-search">
          <h1>Все товары</h1>
          <div className="search-block">
            <img wight={45} height={45} src="/img/search.png" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="itemsCard">
          {items.map((item) => (
            <Card 
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl}
              onFavorie={item.onFavorie}
              onPlus={(obj) =>onAddToCart(obj)}
            />
          ))}
          
        </div>

      </div>

    </div>
  );
}

export default App;
