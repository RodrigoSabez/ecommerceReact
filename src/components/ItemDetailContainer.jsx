import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import storeLogo from '../logo.svg';
import { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [result, setResult] = useState([])
    const {id} = useParams ();


    useEffect(() => {
        const db = getFirestore();
    
        const productRef = doc(db, 'items', id);
    
        getDoc(productRef)
        .then((snapshot)=> {
        setResult({...snapshot.data(), id: snapshot.id});
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id]);
}




/*

function NavBar() {
  const [expanded, setExpanded] = useState(false);

    return (
      <Navbar expanded={expanded} className="miNavbar primary sticky-top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
          alt=""
          src={storeLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Moontagne</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/salamandras">Salamandras</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/calefactores">Calefactores</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/chulengos">Chulengos</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/juegos de parrilla">Juegos de parrilla</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">Nosotros</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    ); 
  }

export default NavBar;
*/