import { forwardRef } from 'react';
import WorkImg from '../assets/imgs/work.png';
import BgBlueImg from '../assets/imgs/bg-blue.png';
import FacebookImg from '../assets/imgs/network/about/icon-facebook.png';
import InstagramImg from '../assets/imgs/network/about/icon-instagram.png';
import TwitterImg from '../assets/imgs/network/about/icon-twitter.png';

export const Nosotros = forwardRef((props, ref) => {
    return (
        <div id="container" ref={ref}>
            <section id="landing">
                <img src={BgBlueImg} alt="bg-blue" className='img-landing' />
                <div className="max">
                    <div className="descrip">
                        <h1>Nosotros:</h1>
                        <h2>Quienes Somos?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur animi temporibus eaque iusto repellendus quas quidem ratione cupiditate quibusdam nesciunt modi facere, inventore ea ab esse recusandae dolorem at!</p> 
                        <button>Mas Sobre Nosotros</button>
                        <div className='network'>
                            <a href="#"><img src={FacebookImg} alt="facebook" /></a>
                            <a href="#"><img src={InstagramImg} alt="instagram" /></a>
                            <a href="#"><img src={TwitterImg} alt="twitter" /></a>
                        </div>
                    </div>
                    <div className="intro">
                        <img src={WorkImg} alt="intro" />
                    </div>
                </div>
            </section>
        </div>
    )
});
