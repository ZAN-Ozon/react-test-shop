function Card(){
    return (
        <div className="card">
            <div className="favorite">
                <img wight={18} height={18} src="/img/heart-unliked.png" alt="heat-unliked" />
            </div>
            <img wight={133} height={112} src="/img/columbia/1.png" alt="columbia" />
            <h5>Men's Glennaker Lake™ Rain Jacket</h5>
            <div className="cardclass1">
                <div className="cardclass2">
                <span>Цена:</span>
                <b>12 900 грн.</b>
                </div>
                <button className="button">
                <img wight={11} height={11} src="/img/plus.png" alt="Plus" />
                </button>
            </div>
        </div>
    );      
}

export default Card;