
export const Cliente = ({ name, paragraph, text, img }) => {
    return (
        <div className='card_cliente' style={{ backgroundImage: `url(${img})`  }}>
            <div className='content_cliente'>
                <h2>{ name}</h2>
                <p className='text_one'>{ paragraph }</p>
                <p className='text_two'>{ text }</p>
            </div>
        </div>
    )
}
