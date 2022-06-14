import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'

function ItemListContainer({ greetings })  {
  
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("https://run.mocky.io/v3/19473963-4191-4ad4-a1df-3a8e4f8aa427")
    fetch("productos.json")
    .then(res => res.json())
    .catch(error => console.error("error:",error))
    .then(res => setProductos(res.results))


  }, [])
  console.log(productos)
  
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )

  console.log(JSON)

  return  <h1>{ greetings }</h1>;
  
}


export default ItemListContainer