import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';
import Home from './pages/Home.jsx';
import FavoritePage from './pages/Favorites_page.jsx';
import AppContext from './pages/context.js';



function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      async function fetchData() {
        setIsLoading(true); 
        const cartResponse = await axios.get('https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems');
        const favoritesResponse = await axios.get('https://61d5f0c36cb45e001718e0a0.mockapi.io/favorites');
        const itemsResponse = await axios.get('https://61d5f0c36cb45e001718e0a0.mockapi.io/items');
        
        setIsLoading(false); 
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      }
      fetchData();
    },[]);

    const onAddToCart = (obj) =>{
      try {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
          axios.delete(`https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems/${obj.id}`);
          setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        } else {
          axios.post('https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems', obj);
          setCartItems((prev) => [...prev, obj]);
        }
      } catch (error) {alert ('не удалось добавить в Корзину');
      }
    };
    
    const onAddToFavorite = async (obj) =>{
      try {
        if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
          axios.delete(`https://61d5f0c36cb45e001718e0a0.mockapi.io/favorites/${obj.id}`);
          setFavorites((prev) => prev.filter((item) => item.id !== obj.id ));
        } else {
        const {data} = await axios.post('https://61d5f0c36cb45e001718e0a0.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);}
      } catch (error) {
        alert ('не удалось добавить в Избранное');
      }
    };
    
    const onRemoveItem = (id) =>{
      axios.delete(`https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id ));
    };

    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
    };

    const IsItemAdded = (id) => {
       return cartItems.some((obj) => Number(obj.id) === Number(id))
    }
    
  return (
    <AppContext.Provider value={{items, cartItems, favorites, IsItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}

      <Header onClickCart={() => setCartOpened(true)} />

      <Route exact path="/">
        <Home 
        items={items}
        cartItems={cartItems} 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToCart={onAddToCart}
        onAddToFavorite={(obj)=> onAddToFavorite(obj)}
        isLoading={isLoading}
        />
      </Route>
      <Route exact path="/favorites">
        <FavoritePage/>
      </Route>
     

    </div>
    </AppContext.Provider>
  );
}

export default App;
