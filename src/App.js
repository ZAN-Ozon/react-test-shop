import Card from './components/Card'
import Header from './components/Header.js'
import Drawer from './components/Drawer.js'

  const arr = [{title: 'Mens Glennaker Lake™ Rain Jacket', price: 1203, imageUrl: "/img/columbia/1.png"},
               {title: 'Mens Lake 22 Down Hooded Jacket', price: 1350, imageUrl: "/img/columbia/2.png"},
               {title: 'Mens Whirlibird™ IV Interchange Jacket', price: 1460, imageUrl:"/img/columbia/3.png"},
               {title: 'Mens Alpine Action™ Insulated Ski Jacket', price: 1758, imageUrl: "/img/columbia/4.png"},]

  function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="div-search">
          <h1>Все товары</h1>
          <div className="search-block">
            <img wight={45} height={45} src="/img/search.png" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="itemsCard">
          {arr.map((obj) => (
            <Card 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl}
            />
          ))}
          
        </div>

      </div>

    </div>
  );
}

export default App;
