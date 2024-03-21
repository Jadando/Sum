import './t1.css'
function t1() {
    const contato = () => {
        window.open('https://wa.me/5513982077243', '_blank')
    }
    return (
        <>
            <div className="fundo mb-10">
                <h1 className='texto'>
                    <span>Alavanque Seu</span>
                    <span> Negócio Online</span>
                </h1>
                <p className='subtexto m-1 relative left-1/6'>
                    Serviços especializados para impulsionar sua presença digital
                </p>
                <button className='bg-purpleBtn text-nowrap w-72 h-10 mt-5
                rounded-lg border-none relative left-1/4 font-poppins
                text-white font-medium text-lg cursor-pointer 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={contato}> Fale com um Especialista<i className="icofont-swoosh-right"></i></button>
            </div>
        </>
    )
}
export default t1