import Modal from 'react-modal';
import CloseImg from '../assets/imgs/close-icon.png';

Modal.setAppElement('#root');

export const ModalCmp = ({ children, modalIsOpen, closeModal }) => {

    return (
        <Modal
            isOpen={ modalIsOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            contentLabel="Example Modal"
        >
            <div style={ModalStyle.parentContainer}>
                <div style={ModalStyle.closeContainer}>
                    <img style={ModalStyle.close} src={CloseImg} alt="close-icon" onClick={ closeModal }/>
                </div>
                { children }
            </div>
        </Modal>
    )
}


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
    parentContainer: {
        display: 'flex',
        flexDirection: 'column',
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