import './frases.css'


interface FresesProps {
    frase: string;
    botao: string;
}

const frases: React.FC<FresesProps> = ({ frase, botao }) => {
    const contato = () => {
        window.open('https://wa.me/5513982077243','_blank')
     }
    return (
        <div className='frase'>
            <h1 className='frases' dangerouslySetInnerHTML={{ __html: frase }}></h1>
            <button className='btn-cta-frases' onClick={contato}>{botao}</button>
        </div>
    )
}
export default frases