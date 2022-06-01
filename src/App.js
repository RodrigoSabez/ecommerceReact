
import NavBar from './components/NavBar';
import Saludar from './components/Saludar';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
 

function App() {
  return <div>
    <h1>Bienvenidos al ecommerce NF</h1>
    
    <NavBar />
    <CartWidget />
    <ItemListContainer greetings={'Saludo para el desafio'}/>

  </div>

}
export default App;
