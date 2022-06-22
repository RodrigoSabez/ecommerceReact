import React, {useState} from 'react'
import Cart from './Cart'
import {Link} from 'react-router-dom';

const ItemCount = ({inicial, max, onAdd}) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if(count < max){
            setCount(count + 1)
        } else(
            alert("No puedes agregar mas productos")
        )
    }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert("No puedes quitar mas productos")
    }
    const reset = () => {
        setCount(inicial)
    }

    return(
        <div className='contador'>
        <h2>{count}</h2>
        <button type="button" class="btn btn-primary" onClick={sumar} >+</button>
        <button type="button" class="btn btn-primary" onClick={restar}>-</button>

        <Link to="./Cart" className="btn btn-primary" onClick={() => { onAdd(count); reset()}}>Agregar al carrito</Link>

        </div>
        
    )
}

export default ItemCount