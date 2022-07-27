import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/Footer';
import MyProvider from './context/CartContext';
import Cart from './components/Cart';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';

initializeApp({
  apiKey: "AIzaSyBnQGFdUfPx7TeEAs0ZI5Ekj5-sK1FyVNE",
  authDomain: "nuestrosfuegos.firebaseapp.com",
  projectId: "nuestrosfuegos",
  storageBucket: "nuestrosfuegos.appspot.com",
  messagingSenderId: "992607824504",
  appId: "1:992607824504:web:5181d4aec025782335db8d",
  measurementId: "G-SPZV52S22T"
});


function App() {
  return (
    <>
    <BrowserRouter>
      <MyProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer category_id={"items"}/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/productos/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        <Footer />
      </MyProvider>
    </BrowserRouter>
    </>
  );
}

export default App;