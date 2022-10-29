import CartWidget from "./CartWidget"
import logo from '../img/DG_Logo.svg'
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navContainer">
            <img src={logo} className="logo" alt="DG logo" />
            <div className="navPestanas">
                <OpcionesNavbar opcionPestana = {'Historia'}/>
                <OpcionesNavbar opcionPestana = {'Clientes'}/>
                <OpcionesNavbar opcionPestana = {'Productos'}/>
                <CartWidget />
            </div>
        </nav>
    )
}


function OpcionesNavbar ({opcionPestana}) {
    return (
        <h3 className="pestanas">{opcionPestana}</h3>
    )
}



export default Navbar