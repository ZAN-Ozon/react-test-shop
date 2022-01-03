import styles from './Card.module.scss'

function Card(props){
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img wight={18} height={18} src="/img/heart-unliked.png" alt="heat-unliked" />
            </div>
            <img wight={133} height={112} src={props.imageUrl} alt="columbia" />
            <h5>{props.title}</h5>
            <div className={styles.cardclass1}>
                <div className={styles.cardclass2}>
                <span>Цена:</span>
                <b>{props.price} грн.</b>
                </div>
                <button className={styles.button}>
                <img wight={11} height={11} src="/img/plus.png" alt="Plus" />
                </button>
            </div>
        </div>
    );      
}

export default Card;