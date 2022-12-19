import { forwardRef } from 'react';
import { Servicio } from '../components/Servicio';
import { servicios } from '../data/servicios';
import RectangleServiceImg from '../assets/imgs/rectangle-services.png';

export const Servicios = forwardRef((props, ref)=> {
    return (
        <div className='parentContainer' ref={ref} style={{ backgroundImage: `url(${RectangleServiceImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '60px'}}>
            <section className='container' id='servicios'>
                {
                    servicios.map( ({title, type}) => {
                        return (
                            <Servicio 
                                key={`service-${title}`}
                                title={ title }
                                services={ type }
                            />
                        )
                    })
                }
            </section>
        </div>
    )
});
