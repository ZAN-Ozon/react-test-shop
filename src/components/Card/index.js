import React from 'react';
import styles from './Card.module.scss'


function Card({title, imageUrl, price, onFavorie, onPlus}){
    
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img wight={18} height={18} src="/img/heart-unliked.png" alt="heat-unliked" />
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
                 src={isAdded ? "/img/btn-checked.png" : "/img/btn-plus.png"}
                 alt="Plus" />
                
            </div>
        </div>
    );      
}

export default Card;