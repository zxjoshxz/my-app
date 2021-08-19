import '../App.css'
import { Navbar } from 'react-bootstrap'
// @ts-ignore
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <Navbar bg="info" expand="lg">
                <Navbar.Brand className='nav-home' as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Brand className='nav-link' as={Link} to="/x-Button">X Button</Navbar.Brand>
                <Navbar.Brand className='nav-link' as={Link} to="/construction">Signature Board</Navbar.Brand>
                <Navbar.Brand className='nav-link' as={Link} to="/slides">Reviews</Navbar.Brand>
                <Navbar.Brand className='nav-link' as={Link} to="/jax">Yo that shit BUSSIN</Navbar.Brand>
        </Navbar>
    )
}

export default Navigation
