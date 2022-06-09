import React from 'react'
import {button, card} from 'react-bootstrap'

const Item = ({personajes}) => {
  const  {name, status, species, image} = personajes

  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      especie: {species}
      estado: {status}
    </Card.Text>
    <Button variant="primary">Ver detalle</Button>
  </Card.Body>
</Card>
  )
}

export default Item