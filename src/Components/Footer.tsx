// @ts-ignore
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='copyright'>
            <p>Copyright &copy; 2021 &bull; Joshua Whynot</p>
            <Link className='footer-link' to="/about">About</Link>
        </footer>
    )
}

export default Footer
