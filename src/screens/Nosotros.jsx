import { forwardRef, useState } from 'react';
import Modal from 'react-modal';
import WorkImg from '../assets/imgs/work.png';
import BgBlueImg from '../assets/imgs/bg-blue.png';
import FacebookImg from '../assets/imgs/network/about/icon-facebook.png';
import InstagramImg from '../assets/imgs/network/about/icon-instagram.png';
import TwitterImg from '../assets/imgs/network/about/icon-twitter.png';

// Modal.defaultStyles.overlay.backgroundColor = '#0000';
Modal.setAppElement('#root');

export const Nosotros = forwardRef((props, ref) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div id="container" ref={ref}>
            <section id="landing">
                <Modal
                    isOpen={ modalIsOpen }
                    onRequestClose={ closeModal }
                    style={ customStyles }
                    contentLabel="Example Modal"
                >
                    <h1 style={ModalStyle.title}>Nosotros:</h1>
                    <p style={ModalStyle.paragraph}>Somos una agencia dedicada a los asuntos públicos, el análisis estratégico y las relaciones institucionales, comprometidos con la confidencialidad, credibilidad e integridad de nuestros clientes. </p>
                    <p style={ModalStyle.paragraph}><span style={{ color: '#024687', fontWeight: 'bold'}}>Luis Cuence:</span> Luis Cuence es lic. en Ciencia Política de la Universidad Católica Argentina (UCA). Se ha especializado en asuntos regulatorios y gubernamentales, y cuenta con experiencia en proyectos de inversión pública privada.</p>
                    <p style={ModalStyle.paragraph}><span style={{ color: '#024687', fontWeight: 'bold'}}>Guadalupe:</span></p>
                    <button style={ModalStyle.button} onClick={ closeModal }>Cerrar</button>
                </Modal>
                <img src={BgBlueImg} alt="bg-blue" className='img-landing' />
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

const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-45%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgb(0,0,0, 0.75)'
    },
};

const ModalStyle = {
    title: {
        color: '#024687',
        fontSize: '3rem'
    },
    paragraph: {
        fontSize: '1.1rem',
        marginBottom: '15px',
        textAlign: 'justify'
    },
    button: {
        padding: '15px',
        marginTop: '40px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#024687',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        width: '100%',
        border: '1px solid #024687',
        cursor: 'pointer'
    },
}