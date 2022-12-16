import { forwardRef } from 'react';
import { Servicio } from '../components/Servicio';
import { servicios } from '../data/servicios';

export const Servicios = forwardRef((props, ref)=> {
    return (
        <div id="container-one" ref={ref}>
            <section id="servicios">
                <h1>Nuestros Servicios:</h1>
                    <div className="grupo_servicios">
                        {
                            servicios.map( (servicio, index) => {
                                return (
                                    <>
                                        <Servicio 
                                            key={`servicio.title+${index}`}
                                            title={servicio.title}
                                            services={servicio.type}
                                            position={servicio.position}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
            </section>
        </div>
    )
});
