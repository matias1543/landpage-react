import { NavBar, Footer } from '../components'

export const AppLayout = ({ children, nosotrosRef, valoresRef, serviciosRef, contactoRef }) => {
    return (
        <>
            <NavBar 
                nosotrosRef={nosotrosRef}
                valoresRef={valoresRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
                {children }
            <Footer />
        </>
    )
}
