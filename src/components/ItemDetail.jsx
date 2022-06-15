import React from 'react'


const ItemDetail = ({productos}) => {

    console.log(productos)
  
    return (
  
        <div class="card" style={{ width: '300px' }}>
  
          <img src={productos.img} class="card-img-top" alt={productos.title} />
  
          <div class="card-body">
  
            <h5 class="card-title">{productos.title}</h5>
  
            <p class="card-text">Detalle: {productos.detail}</p>
  
            <p class="card-text">Precio: {productos.price}</p>
  
            <a href=" " class="btn btn-primary">Ver detalle</a>
  
          </div>
  
        </div>
  
    )
    
  }
  
  export default ItemDetail