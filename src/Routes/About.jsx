import React from 'react'
import './About.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className="about-body">
      <h1>¿Quienes Somos?</h1>
      <p className='contenido'> Somos una empresa familiar, que desde mayo de 2010, nos dedicamos a conseguir y comercializar los mejores utensillos y herramientas para que puedas disfrutar, junto a tus seres queridos, una comida, festividad o simplemente un momento digno de lo que mereces.</p>
        <p className='contenido'> Contamos con productos de la mas alta calidad proveniente desde todas parte del pais para que puedas disfrutar de lo mejor que puede ofrecer nuestras tierras, tanto en materia prima como en mano de obra.</p>
        <p className='contenido'> Ademas, contamos con envios tanto nacionales como internacionales, para que no solo vos, sino toda persona que quiera, pueda disfrutar de lo que nuestreo pais puede ofrecer.</p>
        <p className='contenido'> Desde ya muchas gracias por leer, esperamos que tu experiencia sea satisfactoria, los saluda atentamente, Nuestros Fuegos.</p>
    </div>
  )
}