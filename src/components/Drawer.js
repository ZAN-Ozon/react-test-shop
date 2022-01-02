function Drawer(){
    return (
        <div style={{display:'none'}} className="overlay">
            <div className="drawer">
                <h2>Корзина<img className="removeBtn" wight={18} height={18} src="/img/remove.png" alt="Remove"/></h2>
                <div className="itemsCart">
                    <div className="cartItem">
                        <img wight={70} height={70} src="/img/columbia/1.png" alt="columbia" />
                            <div>
                            <p>Men's Glennaker Lake™ Rain Jacket</p>
                            <b>12 900 грн.</b>
                            </div> 
                        <img className="removeBtn" wight={18} height={18} src="/img/remove.png" alt="Remove"/>
                    </div>
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
                </div>
            </div>
        </div>
    );
}
export default Drawer;