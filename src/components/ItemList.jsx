import React from 'react'
import Item from './Item'

const ItemList = ({personajes}) => {
  return (
    <div>
      {personajes?.map(personajes => <item key={personajes.id} personajes={personajes} />)}
    </div>
  )
}

export default ItemList