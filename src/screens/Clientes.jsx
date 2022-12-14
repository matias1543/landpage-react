import { forwardRef } from 'react';
import Slider from "react-slick";
import { Cliente } from '../components/Cliente';
import { clientes } from '../data/clientes';

export const Clientes = forwardRef((props, ref) => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div id='container-one' ref={ref}>
            <section id='clientes'>
                <h1>Quienes Confían En Nosotros?</h1>
                <div className='max'>
                    <Slider className='grupo_clientes' {...settings}>
                        { 
                            clientes.map( (cliente, index) => {
                                return (
                                    <Cliente
                                        key={`${index}-cliente`}
                                        name={ cliente.name }
                                        paragraph={ cliente.paragraph }
                                        text={ cliente.text }
                                        img={ cliente.img }
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </div>
    )
})
