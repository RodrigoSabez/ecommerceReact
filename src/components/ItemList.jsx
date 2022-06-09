import React from 'react'
import item from './item'

const ItemList = ({personajes}) => {
  return (
    <div>
      {personajes?.map(personajes => <item key={personajes.id} personajes={personajes} />)}
    </div>
  )
}

export default ItemList