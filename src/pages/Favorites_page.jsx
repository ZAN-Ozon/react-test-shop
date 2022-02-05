import React from 'react';
import Card from "../components/Card";
import AppContext from "./context";


function FavoritePage () {
    const {favorites, onAddToFavorite} = React.useContext(AppContext);
    return (
        <div className="content">
           <h1>Мои избранные товары</h1>
           <div className="itemsCard">
                {favorites.map((item, index) => (
                    <Card
                    key={index} 
                    favorited={true}
                    onFavorite={onAddToFavorite}
                    {...item}
                    />
                ))}
            </div>
        </div>
    );
}
export default FavoritePage;