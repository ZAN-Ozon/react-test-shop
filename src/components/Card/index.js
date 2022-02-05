import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../pages/context';
import styles from './Card.module.scss';


function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited=false, loading=false}){
    
    const {IsItemAdded} = React.useContext(AppContext); 
    
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price});
        
    }
    const onFavoriteClick = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    };
    
    return (
        <div className={styles.card}>
            {
                loading ? (
                <ContentLoader 
                    speed={2}
                    width={150}
                    height={190}
                    viewBox="0 0 150 190"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="233" y="117" rx="0" ry="0" width="1" height="1" /> 
                    <rect x="0" y="100" rx="4" ry="4" width="150" height="15" /> 
                    <rect x="0" y="126" rx="5" ry="5" width="100" height="15" /> 
                    <rect x="0" y="165" rx="10" ry="10" width="80" height="25" /> 
                    <rect x="114" y="157" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> ):( 
                <>
                    <div className={styles.favorite}>
                        <img onClick={onFavoriteClick}
                        wight={18} height={18} 
                        src={isFavorite ? "/img/heart-liked.png" : "/img/heart-unliked.png"} 
                        alt="heat-unliked" />
                    </div>
                    <img wight={133} height={112} src={imageUrl} alt="columbia" />
                    <h5>{title}</h5>
                    <div className={styles.cardclass1}>
                        <div className={styles.cardclass2}>
                        <span>Цена:</span>
                        <b>{price} грн.</b>
                        </div>
                    
                        <img className={styles.plus}
                        onClick={onClickPlus}
                        wight={15} height={15}
                        src={IsItemAdded(id) ? "/img/btn-checked.png" : "/img/btn-plus.png"}
                        alt="Plus" />
                        
                    </div>

                </>)
            }
            
        </div>
    );      
}

export default Card;