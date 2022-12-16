import ServiceOneImg from '../assets/imgs/services/service_one.png';

export const Servicio = ({ title, position, services }) => {
    return (
        <div className={`descrip_${position}`}>
            <div className="box">
                { 
                    position == 'right' 
                        ? (
                            <> 
                                <div className="text">
                                    <h2>{ title }</h2>
                                    { 
                                        services.map( (servicio, index) => {
                                            return (
                                                <div key={`servicio.title+${index}`}>
                                                    <h3>{servicio.title}</h3>
                                                    <p>{servicio.info}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="img">
                                    <img src={ServiceOneImg} alt="service_one" />
                                </div>
                            </>
                        )
                        : (
                            <>
                                <div className="img">
                                    <img src={ServiceOneImg} alt="service_one" />
                                </div>
                                <div className="text">
                                    <h2>{ title }</h2>
                                    { 
                                        services.map( (servicio, index) => {
                                            return (
                                                <div key={`servicio.title+${index}`}>
                                                    <h3>{servicio.title}</h3>
                                                    <p>{servicio.info}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    )
}
