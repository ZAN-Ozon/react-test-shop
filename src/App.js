import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';
import Home from './pages/Home.jsx';
import FavoritePage from './pages/Favorites_page.jsx';


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
      axios.get('https://61d5f0c36cb45e001718e0a0.mockapi.io/items').then(res => {
        setItems(res.data);
      });
      axios.get('https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems').then(res => {
        setCartItems(res.data);
      });
      axios.get('https://61d5f0c36cb45e001718e0a0.mockapi.io/favorites').then(res => {
        setFavorites(res.data);
      });
    },[]);

    const onAddToCart = (obj) =>{
      axios.post('https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems', obj);
      setCartItems([...cartItems, obj]);
    };
    
    const onAddToFavorite = async (obj) =>{
      try {
        if (favorites.find(favObj => favObj.id === obj.id)) {
          axios.delete(`https://61d5f0c36cb45e001718e0a0.mockapi.io/favorites/${obj.id}`);
          setFavorites((prev) => prev.filter((item) => item.id !== obj.id ));
        } else {
        const {data} = await axios.post('https://61d5f0c36cb45e001718e0a0.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);}
      } catch (error) {
        alert ('не удоалось добавить в Избранное');
      }
    };
    
    const onRemoveItem = (id) =>{
      axios.delete(`https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id ));
    };

    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
    };
    
  return (
    
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}

      <Header onClickCart={() => setCartOpened(true)} />

      <Route exact path="/">
        <Home 
        items={items} 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToCart={onAddToCart}
        onAddToFavorite={(obj)=> onAddToFavorite(obj)}
        />
      </Route>
      <Route exact path="/favorites">
        <FavoritePage favorites={favorites} onAddToFavorite={onAddToFavorite}/>
      </Route>
     

    </div>
  );
}

export default App;
