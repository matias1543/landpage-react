import { forwardRef, useState } from 'react';
import Modal from 'react-modal';
import WorkImg from '../assets/imgs/work.png';
import BgBlueImg from '../assets/imgs/bg-blue.png';
import FacebookImg from '../assets/imgs/network/about/icon-facebook.png';
import InstagramImg from '../assets/imgs/network/about/icon-instagram.png';
import TwitterImg from '../assets/imgs/network/about/icon-twitter.png';

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
                    <h1 style={ModalStyle.title}>Lorem Ipsum</h1>
                    <p style={ModalStyle.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada purus vitae erat dignissim vehicula. Donec scelerisque nisi at lorem aliquam viverra. Cras venenatis neque metus, vitae commodo justo interdum sagittis. Nulla eu augue lorem. Pellentesque facilisis gravida bibendum. Donec sit amet ullamcorper urna. Aliquam varius dui ac lacus vehicula, et tempor leo finibus. Ut at mi augue. Nulla facilisi. Mauris mi massa, pharetra maximus nibh at, feugiat aliquam tellus. In odio neque, posuere sit amet nisl vitae, congue blandit mi. Nulla hendrerit sapien et nunc vulputate hendrerit. Sed eget ligula vel felis pellentesque tincidunt. Nullam non enim fermentum, ullamcorper nulla in, lobortis turpis. Etiam convallis velit quis nibh laoreet bibendum. Nam ut sem mattis, condimentum dui at, facilisis mauris.</p>
                    <p style={ModalStyle.paragraph}>Fusce sed faucibus mi. Nullam hendrerit lacus sed mauris ullamcorper aliquam. Sed sagittis accumsan urna ac feugiat. Suspendisse potenti. Morbi consequat tempus elit, a aliquet nulla. Mauris rhoncus, neque ac blandit eleifend, neque ante lacinia est, ut faucibus lorem elit eu nunc. Pellentesque aliquam velit sit amet condimentum suscipit. Cras convallis euismod nulla ut varius. Praesent pharetra lectus urna. In hac habitasse platea dictumst. Aenean luctus sit amet mauris ut placerat. Nullam vitae elit quis mi convallis pharetra.</p>
                    <p style={ModalStyle.paragraph}>Fusce nec fermentum erat. Fusce porta, nunc sit amet pulvinar tempus, nisl leo fringilla dui, a pharetra sapien risus non arcu. Nullam eu scelerisque dolor, at varius metus. Sed auctor, orci vel rutrum sodales, urna ex posuere elit, eget placerat augue leo at velit. Integer mattis turpis a odio viverra, vitae aliquet ligula consequat. Etiam et sagittis lacus. Sed scelerisque metus at condimentum interdum. Proin in dui blandit, vulputate massa vel, malesuada leo. Praesent sit amet eleifend ligula.</p>
                    <p style={ModalStyle.paragraph}>Integer volutpat dui risus, et egestas ligula porttitor rutrum. Pellentesque nec dignissim dui. Sed nunc elit, commodo id nulla id, consectetur ornare lacus. Donec ac malesuada est, id pulvinar magna. Maecenas vulputate ac elit et venenatis. Maecenas in finibus tortor, id eleifend neque. Nullam at elementum nisi. Nulla a dui vel orci scelerisque ultrices eu vel diam. Nam in enim in ex aliquam rutrum.</p>
                    <p style={ModalStyle.paragraph}>In hendrerit suscipit nisi luctus iaculis. Ut laoreet elit non justo dignissim, eu sollicitudin elit posuere. Nunc pharetra rhoncus lorem ut malesuada. Suspendisse fermentum ut nibh vel pretium. Pellentesque et arcu sit amet augue placerat finibus at id neque. Donec bibendum, ex tempus finibus dignissim, metus ipsum euismod eros, vel faucibus felis orci non quam. Ut ligula sapien, pharetra ac placerat ut, lobortis sed tellus. Cras viverra congue aliquam. Suspendisse mattis id lorem ut rhoncus. Nunc interdum id magna eu posuere. Suspendisse mollis lorem at urna vulputate, ac commodo nisl condimentum. Cras tincidunt lorem sit amet enim suscipit aliquam. Proin iaculis eros accumsan, efficitur neque ut, sollicitudin turpis.</p>
                    <button style={ModalStyle.button} onClick={ closeModal }>Cerrar</button>
                </Modal>
                <img src={BgBlueImg} alt="bg-blue" className='img-landing' />
                <div className="max">
                    <div className="descrip">
                        <h1>Nosotros:</h1>
                        <h2>Quienes Somos?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur animi temporibus eaque iusto repellendus quas quidem ratione cupiditate quibusdam nesciunt modi facere, inventore ea ab esse recusandae dolorem at!</p> 
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
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1',
      height: '80%',
      width: '80%',
      padding: '20px 50px'
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
        width: '10%',
        border: '1px solid #024687',
        cursor: 'pointer'
    }
}