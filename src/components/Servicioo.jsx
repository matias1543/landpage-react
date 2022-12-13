import ServiceOneImg from '../assets/imgs/services/service_one.png'

export const Servicioo = ({ position }) => {
    return (
        <div className={`descrip_${position}`}>
            <div className="box">
                { 
                    position == 'right' 
                        ? (
                            <>
                                <div className="text">
                                    <h2>Prensa</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula blandit malesuada bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt metus id sollicitudin sagittis.</p>
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
                                    <h2>Prensa</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula blandit malesuada bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt metus id sollicitudin sagittis.</p>
                                </div>
                            </>
                        )

                }

            </div>
        </div>
    )
}
