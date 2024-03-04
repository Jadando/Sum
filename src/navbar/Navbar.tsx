import './Navbar.css'
import logo from '/logo.svg'
import seta from '../assets/arrow.svg'
import { Link } from 'react-scroll';

function Navbar() {
    const toggleMenu = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        const navbar = document.querySelector('.navbar'); 
        if (menuToggle && menu && navbar) {
            menuToggle.classList.toggle('change');
            menu.classList.toggle('active');
            navbar.classList.toggle('active'); 
        }
    };
    const contato = () => {
        const url = 'https://wa.me/5513982077243?text=urlencodedtext';
        window.open(url, '_blank');
    };
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button className='btn-cta-mobile' onClick={() => contato()}>Destaque-se</button>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"> </div>
                    <div className="baralt"></div>
                    <div className="bar"></div>
                </div>
                <ul className="menu">
                    <li >
                        <img src={seta} className="seta" alt="Área de Atuação" />
                        <Link to="slider" smooth={true} duration={500}>Área de atuação</Link>
                    </li>
                    <li>
                        <img src={seta} className="seta" alt="Sobre Nós" />
                        <Link to="about" smooth={true} duration={500}>Sobre nós</Link>
                    </li>
                    <li>
                        <img src={seta} className="seta" alt="Sobre Nós" />
                        <a href="https://wa.me/5513982077243" target='#'>Contato</a>
                    </li>
                    <button className='btn-cta' onClick={() => contato()}>Destaque-se</button>
                </ul>
            </nav>

        </>
    )
}
// +55 13 98207-7243
export default Navbar