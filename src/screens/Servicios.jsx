import { useState, forwardRef } from 'react'
import { Servicio } from '../components/Servicio';
import { servicios } from '../data/servicios';

export const Servicios = forwardRef((props, ref) => {

    const [showUp, setShowUp] = useState({ serviceOneShow: false, serviceTwoShow: false, serviceThreeShow: false });

    const showUpService = (service) => {
        switch(service) {
            case "Estrategías de comunicación corporativa":
                setShowUp( prevState => ({ ...prevState, serviceOneShow: !showUp.serviceOneShow}));
                break;
            case "Asuntos publicos":
                setShowUp( prevState => ({ ...prevState, serviceTwoShow: !showUp.serviceTwoShow}));
                break;
            case "Detección y prevención de riesgos":
                setShowUp( prevState => ({ ...prevState, serviceThreeShow: !showUp.serviceThreeShow}));
                break;
        }
    }

    return (
        <div ref={ref} id="container">
            <section id="servicios">
                <h2>Servicios</h2>
                <div className="max">
                    <div className="box">
                        <h1>Estrategías de comunicación corporativa</h1>
                        { !showUp.serviceOneShow ?
                            <button type="submit" onClick={ () => showUpService("Estrategías de comunicación corporativa") } className="pure-button pure-button-primary">Conozca Mas</button>
                            :
                            <>
                                <Servicio show={showUp.serviceOneShow} service={servicios[0]} />
                                <button type="submit" className="close pure-button pure-button-primary" onClick={ () => showUpService("Estrategías de comunicación corporativa") } >Cerrar</button>
                            </>
                        }
                    </div>
                    <div className="box">
                        <h1>Asuntos publicos</h1>
                        { !showUp.serviceTwoShow ?
                            <button type="submit" onClick={ () => showUpService("Asuntos publicos") } className="pure-button pure-button-primary">Conozca Mas</button>
                            :
                            <>
                                <Servicio show={showUp.serviceTwoShow} service={servicios[1]} />
                                <button type="submit" className="close pure-button pure-button-primary" onClick={ () => showUpService("Asuntos publicos") } >Cerrar</button>
                            </>
                        }
                    </div>
                    <div className="box">
                        <h1>Detección y prevención de riesgos</h1>
                        { !showUp.serviceThreeShow ?
                            <button type="submit" onClick={ () => showUpService("Detección y prevención de riesgos") } className="pure-button pure-button-primary">Conozca Mas</button>
                            :
                            <>
                                <Servicio show={showUp.serviceThreeShow} service={servicios[1]} />
                                <button type="submit" className="close pure-button pure-button-primary" onClick={ () => showUpService("Detección y prevención de riesgos") } >Cerrar</button>
                            </>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
});