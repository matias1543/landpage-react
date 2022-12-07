import React, { useState } from 'react'

export const NavBar = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false)

    const showSideBar = (show) => {
        setSideBarOpen(!show)
    }

    return (
        <header>
            <div className="max">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <nav>
                    <a href="#"><h3>Nosotros</h3></a>
                    <a href="#"><h3>Servicios</h3></a>
                    <a href="#"><h3>Clientes</h3></a>
                    <a href="#"><h3>Contacto</h3></a>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">
                        <i className="fa-solid fa-bars" onClick={ () => showSideBar(sideBarOpen)} ></i>
                    </label>
                </nav>
                <ul className={`menuNav ${sideBarOpen ? " showMenu" : ""}`}>
                    <li><a href="#"><h3>Nosotros</h3></a></li>
                    <li><a href="#"><h3>Servicios</h3></a></li>
                    <li><a href="#"><h3>Clientes</h3></a></li>
                    <li><a href="#"><h3>Contacto</h3></a></li>
                </ul>
            </div>
        </header>
    )
}
