import React, { useState } from 'react'

export const NavBar = ({ nosotrosRef, valoresRef, serviciosRef, contactoRef }) => {

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
                    <a><h3 onClick={() => nosotrosRef.current?.scrollIntoView({ behavior: "smooth" })}>Nosotros</h3></a>
                    <a><h3 onClick={() => serviciosRef.current?.scrollIntoView({ behavior: "smooth" })}>Servicios</h3></a>
                    <a><h3 onClick={() => valoresRef.current?.scrollIntoView({ behavior: "smooth" })}>Valores</h3></a>
                    <a><h3 onClick={() => contactoRef.current?.scrollIntoView({ behavior: "smooth" })}>Contacto</h3></a>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">
                        <i className="fa-solid fa-bars" onClick={ () => showSideBar(sideBarOpen)} ></i>
                    </label>
                </nav>
                <ul className={`menuNav ${sideBarOpen ? " showMenu" : ""}`}>
                    <li><a><h3 onClick={() => nosotrosRef.current?.scrollIntoView({ behavior: "smooth" })}>Nosotros</h3></a></li>
                    <li><a><h3 onClick={() => serviciosRef.current?.scrollIntoView({ behavior: "smooth" })}>Servicios</h3></a></li>
                    <li><a><h3 onClick={() => valoresRef.current?.scrollIntoView({ behavior: "smooth" })}>Valores</h3></a></li>
                    <li><a><h3 onClick={() => contactoRef.current?.scrollIntoView({ behavior: "smooth" })}>Contacto</h3></a></li>
                </ul>
            </div>
        </header>
    )
}
