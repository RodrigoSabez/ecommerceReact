import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    console.log(products)
  return (
    <div>
        <div className="row">
            {products.map(product => (
                <div className="col-md-4" key={product.id}>
                    <Item product={product} />
                </div>
            ))}
        </div>
    </div>
           
  )
}

export default ItemList