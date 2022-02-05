import React from 'react';
import Card from '../components/Card';


function Home ({items,
                searchValue,
                setSearchValue,
                onChangeSearchInput,
                onAddToFavorite,
                onAddToCart,
                isLoading
                }) {
                
    const renderItems = () => {
      
      return (isLoading 
          ? [...Array(8)] 
          : items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())))
          
          .map((item, index) => (
            <Card
              key={index} 
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) =>onAddToCart(obj)}
              loading={isLoading}
              {...item}
            />
      ));
    }
  return (
    <div className="content">
      <div className="div-search">
        <h1>{searchValue ? `Поиск по товару: ${searchValue}` : "Все товары"}</h1>
        <div className="search-block">
          <img wight={45} height={45} src="/img/search.png" alt="Search" />
          {searchValue && (
            <img 
            onClick={() => setSearchValue('')} 
            className="clearSearch" 
            wight={18} height={18} 
            src="/img/remove.png" alt="Clear"/>
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="itemsCard">{renderItems()}</div>
    </div>
  );
}
export default Home;