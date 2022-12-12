import MariaImg from '../assets/imgs/avatars/avatar-maria.png';
import JorgeImg from '../assets/imgs/avatars/avatar_jorge.png'
import AngieImg from '../assets/imgs/avatars/avatar_angie.png';
// import RobertoImg from '../assets/imgs/avatars/avatar_roberto.png';

export const Testimonioss = () => {
    return (
        <div id='container-one'>
            <section id='testimonioss'>
                <h1>Quienes Confían En Nosotros?</h1>
                <div className='max'>
                    <div className='grupo_testimonios'>
                        <div className='card_testimonio' style={{ backgroundImage: `url(${MariaImg})` }}>
                            <div className='content_testimonio'>
                                <h2>Maria Cobos</h2>
                                <p className='text_one'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                                <p className='text_two'>"totam rem aperiam, eaque ips."</p>
                            </div>
                        </div>
                        <div className='card_testimonio' style={{ backgroundImage: `url(${JorgeImg})` }}>
                            <div className='content_testimonio'>
                                <h2>Maria Cobos</h2>
                                <p className='text_one'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                                <p className='text_two'>"totam rem aperiam, eaque ips."</p>
                            </div>
                        </div>
                        <div className='card_testimonio' style={{ backgroundImage: `url(${AngieImg})` }}>
                            <div className='content_testimonio'>
                                <h2>Maria Cobos</h2>
                                <p className='text_one'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                                <p className='text_two'>"totam rem aperiam, eaque ips."</p>
                            </div>
                        </div>
                        {/* <div className='card_testimonio' style={{ backgroundImage: `url(${RobertoImg})` }}>
                            <div className='content_testimonio'>
                                <h2>Maria Cobos</h2>
                                <p className='text_one'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                                <p className='text_two'>"totam rem aperiam, eaque ips."</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
