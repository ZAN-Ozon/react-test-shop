

function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="headerLeft">
          <img wight={40} height={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="h3-upcase">Web store</h3>
            <p className="shop-motto">Магазин лучших товаров</p>
          </div>
        </div>
        <ul className="headerRight">
         <li className="li-mr">
           <img wight={18} height={18} src="/img/shop.png" alt="shop"/>
           <span>1205 грн.</span>
         </li>
         <li>
         <img wight={18} height={18} src="/img/user.png" alt="user" /> 
         </li>
        </ul> 
      </header>
      <div className="content">
        <h1 className="all-items">Все товары</h1>
        
        <div className="items">
        <div className="card">
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

        <div className="card">
          <img wight={133} height={112} src="/img/columbia/2.png" alt="columbia" />
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

        <div className="card">
          <img wight={133} height={112} src="/img/columbia/3.png" alt="columbia" />
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

        <div className="card">
          <img wight={133} height={112} src="/img/columbia/4.png" alt="columbia" />
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

        <div className="card">
          <img wight={133} height={112} src="/img/columbia/5.png" alt="columbia" />
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
        </div>
      </div>

    </div>
  );
}

export default App;
