import Card from './components/Card.js'
import Header from './components/Header.js'
import Drawer from './components/Drawer.js'

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>

    </div>
  );
}

export default App;
