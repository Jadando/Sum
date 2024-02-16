import './Navbar.css'
import logo from '/logo.svg'
import seta from '../assets/arrow.svg'

function Navbar() {
    const toggleMenu = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        if (menuToggle && menu) {
            menuToggle.classList.toggle('change');
            menu.classList.toggle('active');
        }
    };
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"> </div>
                    <div className="baralt"></div>
                    <div className="bar"></div>
                </div>
                <ul className="menu">
                    <li>
                        <img src={seta} className="seta" alt="Área de Atuação" />
                        <a href="#">Área De Atuação</a>
                    </li>
                    <li>
                        <img src={seta} className="seta"alt="Sobre Nós" />
                        <a href="#">Sobre Nós</a>
                    </li>
                    <li>
                        <img src={seta} className="seta" alt="Sobre Nós" />
                        <a href="#">Contato</a>
                    </li>
                    <li><a href="#" className="btn-cta">Cta</a></li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar