import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom"

function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <div className="barra bg-success p-2">
                <img src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png" alt="Logo Pokemon"/>
            <div className="navbar">
                <NavLink to="/" className={setActiveClass}>Home</NavLink>
                <NavLink to="pokemones" className={setActiveClass}>Buscar Pokemon</NavLink>
            </div>
        </div>
    )
}

export default Navbar;