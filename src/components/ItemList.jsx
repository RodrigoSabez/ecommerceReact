import react from 'react'
import Item from "./Item"

function ItemList({productos, onAdd, sumarCarrito}){

    return(
        <div className=" d-flex flex-wrap">
          {productos?.map((producto)=>{
                return <Item id={producto.id} nombre={producto.title} imagen={producto.img} key={producto.id} inicial={1} max={producto.stock} onAdd={onAdd} agregarCantidad={sumarCarrito} />
            })}
        </div>
    )
}

export default ItemList