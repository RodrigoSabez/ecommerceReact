import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://mocki.io/v1/15a841db-c563-4a17-9635-6e2cdc9916f9')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(err=>console.log(err))
    }, [])
 

  return (
    <ItemList products={products} />
  )
}

export default ItemListContainer