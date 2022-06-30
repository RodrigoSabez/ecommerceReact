
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ItemDetail ( { product } ) {

    const {title, detail, price, id, img} = product;

    
    const {addToCart} = useContext

    const [ setCant] = useState(0);

    const {isInCart, addItem} = useContext(CartContext)


    //FUNCIONES DE ITEM COUNT
    const [count, setCount, ] = useState(1)
    const stock = 10;
  
    const sumar = () => {
      count < stock ? setCount(count + 1) : alert('No hay suficiente stock')
    }
    const restar = () => {
      count > 1 ? setCount(count - 1) : alert('La cantidad no puede ser menor que 1')
    }
    const reset = () => {
      setCount(1)
    }
  
    const agregar = (count) => {
      if (count === 1) {
        alert(`Se agregó ${title} al carrito`);
      } else {	
      alert(`Se agregaron ${count} ${title} al carrito.`);
      }
      setCant(count);
      addToCart(detail, count);
      isInCart (detail.id)
      addItem(detail, stock)
    }
  

  //FIN FUNCIONES DE ITEM COUNT

    return (
        <div className="card text-center">
            <div className="card-header">
                {product.category}
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <img src={product.img} alt={product.title} />
                <p className="card-text">{product.detail}</p>
                <p className="card-text"><h3>${product.price}</h3></p>
               <br /> <ItemCount  stock={10} initial={1} onAdd={agregar} sumar={sumar} restar={restar} reset={reset} count={count} />
                <Link to="/" className="btn btn-dark">Volver</Link>
            </div>

        </div>


    )
}
