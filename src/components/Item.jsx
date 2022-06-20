/*
import React from 'react'
import { Link } from "react-router-dom";
const Item = ({product}) => {
    return (
        <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={product.img} alt={product.title}/>
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.detail}</p>
            <Link to={`/producto/${product.id}`} class="btn btn-primary">Ver más</Link>

        </div>
      </div>

    )
}

export default Item
*/


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Producto
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripcion del producto
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
}


