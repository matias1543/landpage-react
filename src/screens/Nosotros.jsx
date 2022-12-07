import { forwardRef } from 'react';
import WorkImg from '../assets/imgs/work.png'

export const Nosotros = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} id="container">
                <div className="img-landing"></div>
            </div>

            <div id="container">
                <section id="landing">
                    <div className="max">
                        <div className="descrip">
                            <h1>Nosotros:</h1>
                            <h2>Quienes Somos?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur animi temporibus eaque iusto repellendus quas quidem ratione cupiditate quibusdam nesciunt modi facere, inventore ea ab esse recusandae dolorem at!</p> 
                            <button>Mas Sobre Nosotros</button>
                        </div>
                        <div className="intro">
                            <img src={WorkImg} alt="intro" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
});
