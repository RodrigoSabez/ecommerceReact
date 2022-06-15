import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import productosJson from '../productos.json'

function ItemListContainer({ greetings }) {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    /* fetch("https://run.mocky.io/v3/19473963-4191-4ad4-a1df-3a8e4f8aa427") 
    fetch(productosJson)
    .then(res => res.json())
    .catch(error => console.error("error:",error))
    .then(res => setProductos(res.results))*/
    
    //pedido con promise
    const productos = new Promise((resolve, reject) => {
      resolve(productosJson);
    }
    );
    productos.then(data => {
      setProductos(data);
    }
    ).catch(error => {
      console.log("Error:" + error);
    }
    );

  }, [])
  
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )




}


export default ItemListContainer