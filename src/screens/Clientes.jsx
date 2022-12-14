import { useState, forwardRef, useEffect } from 'react';
import Slider from "react-slick";
import { Cliente } from '../components/Cliente';
import { clientes } from '../data/clientes';

export const Clientes = forwardRef((props, ref) => {
    
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
    
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      }
    }, [])
    
    const cardsToShow = (width) => {
        if(width <= 412) {
            return {
                infinite: true,
                speed: 500,
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        if(width <= 1054) {
            return {
                infinite: true,
                speed: 500,
                arrows: true,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        else {
            return {
                infinite: true,
                speed: 500,
                arrows: true,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    }

    let settings = cardsToShow(width);

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
