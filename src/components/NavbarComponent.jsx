import CartWidget from "./CartWidget"
const NavbarComponent = () =>{

    return(
        <nav className="navContainer">
            <a className="aLink">Domenicos Pizas</a>
            <a className="aLink">Inicio </a>
            <a className="aLink">Menú </a>
            <a className="aLink">Pedidos en Línea </a>
            <a className="aLink">Promociones</a>
            <a className="aLink">Contáctanos </a>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default NavbarComponent