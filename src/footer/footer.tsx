import './footer.css'
import logo from '/logo.svg'

function footer() {
    const agora: Date = new Date();
    const ano: number = agora.getFullYear();
    return (
        <>
            <footer>
                <img src={logo} />
                © {ano} Social Unum Makers Todos os direitos reservados.
            </footer>
        </>
    )
}
export default footer