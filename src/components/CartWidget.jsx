import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import carrito from '../imagenes/carrito.png'


export default function CartWidget() {

  const {getItemQty} = useContext(CartContext)

  return (
   <img className='carrito' src={carrito} alt="" />  

  )
}
