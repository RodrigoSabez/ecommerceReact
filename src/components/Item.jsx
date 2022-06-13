import React from 'react'


const Item = ({personajes}) => {
  const  {name, status, species, image} = personajes

  return (
    <div>

      <div class="card" style={{ width: '300px' }}>

        <img src={image} class="card-img-top" alt={name} />

        <div class="card-body">

          <h5 class="card-title">{name}</h5>

          <p class="card-text">Especie: {species}</p>

          <p class="card-text">Estado: {status}</p>

          <a href=" " class="btn btn-primary">Ver detalle</a>

        </div>

      </div>

    </div>
  )
  
}

export default Item