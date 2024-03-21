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
                <button className='bg-purpleBtn w-64 h-10 rounded-lg border-none relative left-1/4 font-poppins text-white font-medium text-lg' onClick={contato}>Destaque-se<i className="icofont-swoosh-right"></i></button>
            </div>

            

        </>
    )
}
export default t1