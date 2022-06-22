import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { producto } from '../productos.js'

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState({})

    const params = useParams()
  console.log(producto)

    useEffect(() => {
        if(params.id){
            fetch(producto)
                .then(res=>res.json())
                .then(json=>setProductSelected(json.find(item => item.id == params.id)))
                .catch(err=>console.log(err))
        }
    }, [params.id])
    
    console.log(productSelected)
  return (
    <ItemDetail product={productSelected} />
  )
}

export default ItemDetailContainer