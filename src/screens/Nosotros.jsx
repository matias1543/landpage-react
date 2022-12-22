import { forwardRef, useState } from 'react';
import Modal from 'react-modal';
import WorkImg from '../assets/imgs/work.png';
import BgBlueImg from '../assets/imgs/bg-blue.png';
import FacebookImg from '../assets/imgs/network/about/icon-facebook.png';
import InstagramImg from '../assets/imgs/network/about/icon-instagram.png';
import TwitterImg from '../assets/imgs/network/about/icon-twitter.png';
import CloseImg from '../assets/imgs/close-icon.png';
import LuisCuenceImg from '../assets/imgs/luis-cuence.png';
import AngieImg from '../assets/imgs/avatars/avatar_angie.png';

Modal.setAppElement('#root');

export const Nosotros = forwardRef(({ width }, ref) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const styleUserContainer = () => {
        if(width <= 900) {
            return  {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                height: '80%'
            }
        }
        else {
           return {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '800px',
            height: '400px'
            }
        }
    }

    return (
        <div className="container" ref={ref} style={{ backgroundImage: `url(${BgBlueImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '1240px', padding: '60px' }}>
            <section id="landing">
                <Modal
                    isOpen={ modalIsOpen }
                    onRequestClose={ closeModal }
                    style={ customStyles }
                    contentLabel="Example Modal"
                >
                    <div style={ModalStyle.closeContainer}>
                        <img style={ModalStyle.close} src={CloseImg} alt="close-icon" onClick={ closeModal }/>
                    </div>
                    <div style={ModalStyle.content}>
                        <div style={styleUserContainer()}>
                            <div style={ModalStyle.boxText}>
                                <h1 style={ModalStyle.title}>Luis Cuence</h1>
                                <p style={ModalStyle.paragraph}>Luis Cuence es lic. en Ciencia Política de la Universidad Católica Argentina (UCA). Se ha especializado en asuntos regulatorios y gubernamentales, y cuenta con experiencia en proyectos de inversión pública privada.</p>
                            </div>
                            <div style={ModalStyle.boxImage}>
                                <img style={ModalStyle.LuisCuenceImg} src={LuisCuenceImg} alt="luis-cuence-img" />
                            </div>
                        </div>
                    </div>
                </Modal>
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px'
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
    content: {
        width: '100%',
        height: '95%',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '10px'
    },
    // userContainer: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '800px',
    //     height: '400px'
    // },
    boxText: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '100%',
        height: '70%',
        padding: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#ffff',
        borderRadius: '20px',
        zIndex: '5',
        marginRight: '-5%',
        marginBottom: '10%'
    },
    boxImage: {
        borderRadius: '70px',
        height: '100%',
        width: '80%',
        maxWidth: '365px',
        overflow: 'hidden'
    },
    LuisCuenceImg: {
        width: '100%',
        height: '100%'
    },
    closeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        padding: '5px'
    },
    close: {
        cursor: 'pointer',
        width: '40px',
        height: '40px'
    }
}