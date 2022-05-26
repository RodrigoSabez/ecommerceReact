import React from "react";

export default function Saludar({ msg, quien}) {
    return <div> {msg + " " + quien} </div>;
}