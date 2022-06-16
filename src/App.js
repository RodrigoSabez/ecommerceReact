import NavBar from './components/NavBar';
// import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import {useState} from 'react';
import ItemDetailContainer from "./components/ItemDetailContainer";


 

function App() {


  const [carrito, setCarrito] = useState(0);
    
  const sumarCarrito = (cantidad) => {
    setCarrito(carrito + cantidad)
  }

  const onAdd = (count) => {
    alert(`Sumaste ${count} productos`)
  }
return (
 <div>
    <h1>Bienvenidos al ecommerce NF</h1>
    
    <NavBar />
    <CartWidget />

   {/* <ItemListContainer  greetings={'Saludo para el desafio'}  /> */  }
    <ItemDetailContainer />

  </div>
)
  
}

export default App;


