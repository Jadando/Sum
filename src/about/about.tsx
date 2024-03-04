import './about.css'
import teste from '../assets/teste.png'

interface CardProps {
    title: string;
    nome: string;
    imageSrc: string;
    contentHover: string;
}

const Card: React.FC<CardProps> = ({ title, nome, imageSrc, contentHover }) => {
    return (
        <div className="card">
            <img className='img_about' src={imageSrc} alt={title} /> {/* Usar o caminho da imagem */}
            <div className="card-content">
                <h2 id='title'>{title}</h2>
                <div className="hover-content">
                  <h2 id='nome'>{nome}</h2>
                  <p id='conteudo_sobre'>{contentHover}</p>  
                </div>
            </div>
        </div>
    );
}


function about() {
    return (
        <>
            <h1 id='info'>Sobre Nós</h1>
            <div className='about'>
                <Card
                    title="Social midia"
                    nome="Nome completo"
                    imageSrc={teste}
                    contentHover='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, sapien eget sagittis condimentum, ipsum diam varius erat, scelerisque luctus ipsum massa vel felis. Integer faucibus metus eu velit pellentesque'
                />
                <Card
                    title="Web designer"
                    nome="Nome completo"
                    imageSrc={teste}
                    contentHover='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, sapien eget sagittis condimentum, ipsum diam varius erat, scelerisque luctus ipsum massa vel felis. Integer faucibus metus eu velit pellentesque'
                />
                    <Card
                    title="Gestor de trafego"
                    nome="Nome completo"
                    imageSrc={teste}
                    contentHover='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, sapien eget sagittis condimentum, ipsum diam varius erat, scelerisque luctus ipsum massa vel felis. Integer faucibus metus eu velit pellentesque'
                />
            </div>
        </>
    )
}

export default about


