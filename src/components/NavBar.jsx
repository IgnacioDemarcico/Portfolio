import Nav from 'react-bootstrap/Nav';
import './styles/NavBar.css'

function BasicExample() {
  return (
    <Nav className='nav'activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default BasicExample;