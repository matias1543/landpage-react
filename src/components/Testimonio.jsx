
export const Testimonio = ({ name, paragraph, text, img }) => {
    return (
        <div className='card_testimonio' style={{ backgroundImage: `url(${img})`  }}>
            <div className='content_testimonio'>
                <h2>{ name}</h2>
                <p className='text_one'>{ paragraph }</p>
                <p className='text_two'>{ text }</p>
            </div>
        </div>
    )
}
