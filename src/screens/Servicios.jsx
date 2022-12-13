import { useState, forwardRef } from 'react'
import { Servicio } from '../components/Servicio';

export const Servicios = forwardRef((props, ref)=> {
    return (
        <div id="container-one" ref={ref}>
            <section id="servicioss">
                <h1>Nuestros Servicios:</h1>
                    <div className="grupo_servicios">
                        <Servicio position={'right'}/>
                        <Servicio position={'left'}/>
                        <Servicio position={'right'}/>
                    </div>
            </section>
        </div>
    )
});
