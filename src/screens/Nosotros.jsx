import { forwardRef, useState } from 'react';
import WorkImg from '../assets/imgs/work.png';
import BgBlueImg from '../assets/imgs/bg-blue.png';
import FacebookImg from '../assets/imgs/network/about/icon-facebook.png';
import InstagramImg from '../assets/imgs/network/about/icon-instagram.png';
import TwitterImg from '../assets/imgs/network/about/icon-twitter.png';
import LuisCuenceImg from '../assets/imgs/luis-cuence.png';
// import AngieImg from '../assets/imgs/avatars/avatar_angie.png';
import { ModalCmp } from '../components/ModalCmp';


export const Nosotros = forwardRef((props, ref) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }


    return (
        <div className="container" ref={ref} style={{ backgroundImage: `url(${BgBlueImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '1240px', minHeight: '1040px' }}>
            <section id="landing">
                <ModalCmp
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                >
                    <div id="modal-nosotros" className='content'>
                        <div className='user-container' >
                            <div className='box-text'>
                                <h1>Luis Cuence</h1>
                                <p>Luis Cuence es lic. en Ciencia Política de la Universidad Católica Argentina (UCA). Se ha especializado en asuntos regulatorios y gubernamentales, y cuenta con experiencia en proyectos de inversión pública privada.</p>
                            </div>
                            <div className='box-image'>
                                <img src={LuisCuenceImg} alt="luis-cuence-img" />
                            </div>
                        </div>
                    </div>
                </ModalCmp>
                <div className="max">
                    <div className="descrip">
                        <h1>Nosotros:</h1>
                        <h2>Quienes Somos?</h2>
                        <p>Somos una agencia dedicada a los asuntos públicos, el análisis estratégico y las relaciones institucionales, comprometidos con la confidencialidad, credibilidad e integridad de nuestros clientes.</p>
                        <button onClick={ openModal }>Mas Sobre Nosotros</button>
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