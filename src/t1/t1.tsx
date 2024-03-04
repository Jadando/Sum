import './t1.css'
function t1() {
    const contato = () => {
        window.open('https://wa.me/5513982077243', '_blank')
    }
    return (
        <>
            <div className="fundo">
                <h1 className='texto'>
                    <span>Alavanque Seu</span>
                    <span> Negócio Online</span>
                </h1>
                <p className='subtexto'>
                    Serviços especializados para impulsionar sua presença digital
                </p>
                <button className='btn-cta-t1' onClick={contato}>Destaque-se</button>
            </div>

        </>
    )
}
export default t1