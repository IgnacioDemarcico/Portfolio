import Nav from 'react-bootstrap/Nav';
import './styles/NavBar.css'
import {Link} from 'react-router-dom';

function BasicExample() {
  return (
    <Nav className='nav'activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item className='items'>
        <Nav.Link as={Link} to="/favorites">Favoritos</Nav.Link>
        </Nav.Item>
        <Nav.Item className='items'>
            <Nav.Link as={Link} to="/Projects">Mis Creaciones</Nav.Link>
        </Nav.Item>
        <Nav.Item className='items'>
            <Nav.Link as={Link} to="/information">Yo</Nav.Link>
        </Nav.Item>
        <Nav.Item className='home'>
            <Nav.Link as={Link} to="/">IGNACIO DEMARCIO</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default BasicExample;