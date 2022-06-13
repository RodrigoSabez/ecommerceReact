
import NavBar from './components/NavBar';
import Saludar from './components/Saludar';
// import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import ItemList from './components/ItemList';
 

function App() {

  const onAdd = (count) => {
    alert(`Sumaste ${count} productos`)
  }

  return <div>
    <h1>Bienvenidos al ecommerce NF</h1>
    
    <NavBar />
    <CartWidget />

    <ItemListContainer /* greetings={'Saludo para el desafio'} */ />  
    <ItemCount  inicial={1} max={10} onAdd={onAdd} />

  </div>

}
export default App;
