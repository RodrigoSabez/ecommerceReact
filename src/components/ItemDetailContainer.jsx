import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productosJson from '../productos.json'


function ItemDetailContainer() {
    

    const [productos, setProductos] = useState([])
    const [prodSelected, setProdSelected] = useState()

    useEffect(() => {
        /* fetch("https://run.mocky.io/v3/19473963-4191-4ad4-a1df-3a8e4f8aa427") 
        fetch(productosJson)
        .then(res => res.json())
        .catch(error => console.error("error:",error))
        .then(res => setProductos(res.results))*/

        //pedido con promise
        const productos = new Promise((resolve, reject) => {
            resolve(productosJson);
        }
        );
        productos.then(data => {
            setProductos(data);
        }
        ).catch(error => {
            console.log("Error:" + error);
        }
        );
        
    }, [])

   useEffect(() => {
    const seleccion = '01';
    if(productos.length > 0){
        const select = productos.find(producto => producto.id === seleccion);
        setProdSelected(select);
    }
    }, [productos])

console.log(prodSelected);
    return (
        <div>
            {/* <ItemList productos={productos} /> */}
            {/* <ItemDetail id={itemDetail.id} title={itemDetail.title} img={itemDetail.img} detail={itemDetail.detail} price={itemDetail.price} stock={itemDetail.stock} /> */}
            <ItemDetail producto={prodSelected} />
        </div>
    )




}

export default ItemDetailContainer;

//{setItemDetail(productos.find(producto => producto.id === id))},  