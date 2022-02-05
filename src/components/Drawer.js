import React from "react";
import axios from 'axios';
import Info from "./Info.jsx";
import AppContext from "../pages/context.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = []}){
    
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComlete, setIsOrderComlete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    
    const onClickOrder = async () => {
        try {
        setIsLoading(true);
        const {data} = await axios.post('https://61d5f0c36cb45e001718e0a0.mockapi.io/orders', 
        { items : cartItems});
        
        setOrderId(data.id);
        setIsOrderComlete(true);
        setCartItems([]);
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete('https://61d5f0c36cb45e001718e0a0.mockapi.io/selecteditems' + item.id);
            await delay(1000);
        }



        } catch (error){alert ('не удалось создать заказ');
        }
        setIsLoading(false);
    }
    return ( 
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина<img onClick={onClose} className="removeBtn" wight={18} height={18} src="/img/remove.png" alt="Remove"/></h2>

                {items.length > 0 ? (
                    <div><div className="itemsCart">
                      {items.map((obj) => (
                        
                        <div key={obj.id} className="cartItem">
                            <img wight={70} height={70} src={obj.imageUrl} alt="item" />
                                <div>
                                <p>{obj.title}</p>
                                <b>{obj.price} грн.</b>
                                </div> 
                            <img 
                            onClick={() => onRemove(obj.id)} 
                            className="removeBtn" 
                            wight={18} height={18} 
                            src="/img/remove.png" alt="Remove"/>
                        </div>   
                      ))} 
                    </div>
                    <div className="cartTotal">
                    <ul>
                        <li className="total">
                        <span>Итого:</span>
                        <div></div>
                        <b>1205 грн.</b>
                        </li>
                        <li className="tax">
                        <span>НДС 20%</span>
                        <div></div>
                        <b>24 грн. 10 коп.</b>
                        </li>
                    </ul>
                    <button disabled={isLoading} onClick={onClickOrder} className="greenBtn">Оформить заказ<img width={30} height={20} src="/img/arrow.png" alt="arrow"></img></button>
                </div></div> 
                ) : (
                    <Info 
                        title={isOrderComlete? `Заказ #${orderId} оформлен`:"Корзина пустая"} 
                        description={isOrderComlete? "Ваш заказ оформлен":"Добавьте товар"} 
                        image={isOrderComlete? "/img/complelte-order.png":"/img/empty-cart.png"}
                    />
                )}
                
            </div>
        </div>
    );
}
export default Drawer;