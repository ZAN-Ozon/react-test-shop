function Drawer({onClose, onRemove, items = []}){
    
    return ( 
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина<img onClick={onClose} className="removeBtn" wight={18} height={18} src="/img/remove.png" alt="Remove"/></h2>

                {items.length > 0 ? (
                    <div><div className="itemsCart">
                      {items.map((obj) => (
                        
                        <div className="cartItem">
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
                    <button className="greenBtn">Оформить заказ<img width={30} height={20} src="/img/arrow.png" alt="arrow"></img></button>
                </div></div> 
                ) : (
                    <div className="cartEmpty">
                    <img width="120px" height="120" src="/img/empty-cart.png" alt="empty"/>
                    <h2>Корзина пустая</h2>
                    <p>Добавьте товар</p>
                    <button onClick={onClose} className="greenBtn">
                        <img width={30} height={20} src="/img/arrow.png" alt="arrow"/>
                        Вернуться назад
                    </button>
                </div>
                )}
                
            </div>
        </div>
    );
}
export default Drawer;