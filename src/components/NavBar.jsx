import Nav from 'react-bootstrap/Nav';
import './styles/NavBar.css'
import {Link} from 'react-router-dom';

function BasicExample() {
  return (
    <Nav className='nav'activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item className='items'>
        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
        </Nav.Item>
        <Nav.Item className='items'>
            <Nav.Link as={Link} to="/Projects">My Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item className='home'>
            <Nav.Link as={Link} to="/">IGNACIO DEMARCICO</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default BasicExample;