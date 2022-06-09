import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'

function ItemListContainer({ greetings })  {
  
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .catch(error => console.error("error:",error))
    .then(res => setPersonajes(res.results))


  }, [])
  console.log(personajes)
  
  return (
    <div>
      <ItemList personajes={personajes} />
    </div>
  )

  console.log(JSON)

  return  <h1>{ greetings }</h1>;
  
}


export default ItemListContainer