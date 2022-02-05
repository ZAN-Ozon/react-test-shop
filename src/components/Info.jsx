import React from 'react'
import AppContext from '../pages/context';

const Info = ({title, image, description}) => {
  
    const {setCartOpened} = React.useContext(AppContext);  
  
  return (
    <div className="cartEmpty">
        <img width="120px" height="120" src={image} alt="empty"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => setCartOpened(false) } className="greenBtn">
            <img width={30} height={20} src="/img/arrow.png" alt="arrow"/>
            Вернуться назад
        </button>
    </div>
  )
}

export default Info;
 