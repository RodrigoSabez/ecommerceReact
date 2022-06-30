import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
     <MyProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
     </MyProvider>
    </BrowserRouter>
    
  );
}

export default App;
