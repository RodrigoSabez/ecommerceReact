import React from 'react'
import './Contact.css'
import { FaFacebook, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IconName } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="contact">
      <h1>¡Contactanos!</h1>
      <IconContext.Provider value={{ color: "orange", size: "5em"}}>
        <a href=""><FaEnvelope className="icon" /></a>
        <a href=""><FaFacebook className="icon" /></a>
        <a href=""><FaInstagram className="icon" /></a>
        <a href=""><FaWhatsapp className="icon" /></a>
      </IconContext.Provider>
    </div>

  )

}