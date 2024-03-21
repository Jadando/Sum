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
        <div className='flex flex-col items-center'>
            <h1 className='frases' dangerouslySetInnerHTML={{ __html: frase }}></h1>
            <button className=' bg-purpleBtn text-nowrap w-72 h-16 rounded-lg border-none font-poppins text-white font-bold text-lg cursor-pointer' onClick={contato}>{botao}</button>
        </div>
    )
}
export default frases