import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom"

function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "white" : "red");
    return (
        <div className="barra">
                <img src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png"/>
            <div className="navbar">
                <NavLink to="/" className={setActiveClass}>Home</NavLink>
                <NavLink to="pokemones" className={setActiveClass}>Pokemones</NavLink>
            </div>
        </div>
    )
}

export default Navbar;