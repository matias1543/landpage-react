export const Contacto = () => {
    return (
        <div id="container-one">
            <section id="contacto">
                    <h2>Contacto</h2>
                    <form className="max pure-form "action="#">
                        <div className="datos">
                            <label htmlFor="stacked-nombre">Nombre</label>
                            <input type="text" id="stacked-nombre" placeholder="Ingresar Nombre" />
                            
                            <label htmlFor="stacked-email">Email</label>
                            <input type="email" id="stacked-email" placeholder="Ingresar Email" />

                            <label htmlFor="stacked-telefono">Telefono</label>
                            <input type="text" id="stacked-telefono" placeholder="Ingresar Telefono" />
                        </div>
                        <div className="mensaje">
                            <label htmlFor="stacked-nombre">Mensaje</label>
                            <textarea className="pure-input-1-2" placeholder="Ingresar Mensaje"></textarea>
                            <button type="submit" className="pure-button pure-button-primary">Enviar</button>
                        </div>
                    </form>
            </section>
        </div>
    )
}
