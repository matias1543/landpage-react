
export const Testimonio = ({ name, paragraph, text }) => {
    return (
        <div className='card_testimonio'>
            <div className='content_testimonio'>
                <h2>{ name}</h2>
                <p className='text_one'>{ paragraph }</p>
                <p className='text_two'>{ text }</p>
            </div>
        </div>
    )
}
