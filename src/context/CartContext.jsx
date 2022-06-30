import { createContext, useState } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) => {

    const [cart, setCart] = useState([])
//
const isInCart = (id) => {
    return cart.some(x => x.id === id)
}
//
const addItem = (item, stock) => {
    const newItem = {
        ...item,
        stock
    }

    if(isInCart(newItem.id)){
        const findProduct = cart.find(x => x.id ===newItem.id)
        const ProductIndex = cart.indexOf(findProduct)
        const auxArray = [...cart]
        auxArray[ProductIndex].stock += stock
        setCart(auxArray)
    } else{
        setCart([...cart], newItem)
    }
}
//
const emptyCart = () => {
    setCart([])
}
//
const deleteItem = (id) => {
    return cart.filter(x => x.id !== id)
}
//
const getItemQty = () => {
    return cart.reduce((acc, x) => acc += x.stock, 0)
}
//
const getItemPrice = () => {
    return cart.reduce((acc, x) => acc += x.stock * x.price)
}




    return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</Provider>
}

export default MyProvider