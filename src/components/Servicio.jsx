export const Servicio = ({ show, service }) => {
    if(show) {
        return (
            <div id="container">
                <section id="servicio">
                    <div className="max">
                        <div className="group">
                            <h3>{service.type[0].title}</h3>
                            <p>{service.type[0].info}</p>
                        </div>
                        <div className="group">
                            <h3>{service.type[1].title}</h3>
                            <p>{service.type[1].info}</p>
                        </div>
                        {service.type.length > 2 &&
                            <div className="group">
                                <h3>{service.type[2].title}</h3>
                                <p>{service.type[2].info}</p>
                            </div>
                        }
                    </div>
                </section>
            </div>
        )
    }
}
