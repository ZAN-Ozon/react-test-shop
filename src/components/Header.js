function Header(props){
    return (
        <header>
        <div className="headerLeft">
          <img wight={40} height={40} src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="h3-upcase">Web store</h3>
            <p className="shop-motto">Магазин лучших товаров</p>
          </div>
        </div>
        <ul className="headerRight">
         <li onClick={props.onClickCart} className="li-mr">
           <img wight={18} height={18} src="/img/shop.png" alt="shop"/>
           <span>1205 грн.</span>
         </li>
         <li>
         <img wight={18} height={18} src="/img/user.png" alt="user" /> 
         </li>
        </ul> 
      </header>
    );
}
export default Header;