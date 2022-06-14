import React from 'react'

const Item = ({productos}) => {

    const  {title, detail, price, img} = productos
  
    return (
      <div>
  
        <div class="card" style={{ width: '300px' }}>
  
          <img src={img} class="card-img-top" alt={title} />
  
          <div class="card-body">
  
            <h5 class="card-title">{title}</h5>
  
            <p class="card-text">Detalle: {detail}</p>
  
            <p class="card-text">Precio: {price}</p>
  
            <a href=" " class="btn btn-primary">Ver detalle</a>
  
          </div>
  
        </div>
  
      </div>
    )
    
  }
  
  export default Item