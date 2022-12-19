export const Servicio = ({ title, services }) => {
    return (
        <>
            <h1 style={{ marginBottom: '150px', width: '100%'}}>{ title }.</h1>
            <div className="grupo_servicios">
                {
                    services.map( ({ title, info, position, img }) => {
                        return (
                            <div className="descrip" key={`service-${title}`}>
                                <div className='box'>
                                    {
                                        position == 'right'
                                            ? (
                                                <>
                                                    <div className='text'>
                                                        <h2>{ title }</h2>
                                                        <p>{ info }</p>
                                                    </div>
                                                    <div className="img">
                                                        <img src={img} alt="img" />
                                                    </div>
                                                </>
                                            )
                                            : (
                                                <>
                                                    <div className="img">
                                                        <img src={img} alt="img" />
                                                    </div>
                                                    <div className='text'>
                                                        <h2>{ title }</h2>
                                                        <p>{ info }</p>
                                                    </div>
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
