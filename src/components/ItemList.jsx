import React from 'react'
import Item from './Item'

const ItemList = ({personajes}) => {
  return (
    <div>
      {personajes?.map(personajes => <Item key={personajes.id} personajes={personajes} />)}
    </div>
  )
}

export default ItemList