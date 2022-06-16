
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";






function Home({sumarCarrito} ){

    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`)
        }
      }
    
    return (
        <>

            <ItemListContainer onAdd={onAdd} sumarCarrito={sumarCarrito} />
            <ItemDetailContainer />
        </>)


export default Home;