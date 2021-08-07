import '../App.css'
import { Navbar } from 'react-bootstrap'
// @ts-ignore
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <Navbar bg="info" expand="lg">
                <Navbar.Brand className='nav-home' as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Brand className='nav-link' as={Link} to="/x-Button">X Button</Navbar.Brand>
                <Navbar.Brand className='nav-link' as={Link} to="/signature-board">Signature Board</Navbar.Brand>
        </Navbar>
    )
}

export default Navigation
