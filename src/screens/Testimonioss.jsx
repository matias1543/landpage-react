import Slider from "react-slick";
import { Testimonio } from '../components/Testimonio';
import { testimonios } from '../data/testimonios';

export const Testimonioss = () => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div id='container-one'>
            <section id='testimonioss'>
                <h1>Quienes Confían En Nosotros?</h1>
                <div className='max'>
                    <Slider className='grupo_testimonios' {...settings}>
                        { 
                            testimonios.map( testimonio => {
                                return (
                                    <Testimonio
                                        name={ testimonio.name }
                                        paragraph={ testimonio.paragraph }
                                        text={ testimonio.text }
                                        img={ testimonio.img }
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </div>
    )
}
