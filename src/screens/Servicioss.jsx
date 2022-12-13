import { useState, forwardRef } from 'react'
import { Servicioo } from '../components/Servicioo';

export const Servicioss = forwardRef((props, ref)=> {
    return (
        <div id="container-one" ref={ref}>
            <section id="servicioss">
                <h1>Nuestros Servicios:</h1>
                    <div className="grupo_servicios">
                        <Servicioo position={'right'}/>
                        <Servicioo position={'left'}/>
                        <Servicioo position={'right'}/>
                    </div>
            </section>
        </div>
    )
});
