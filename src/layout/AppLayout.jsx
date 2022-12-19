import { NavBar, Footer } from '../components'

export const AppLayout = ({ children, nosotrosRef, valoresRef, clientesRef, serviciosRef, contactoRef }) => {
    return (
        <>
            <NavBar 
                nosotrosRef={nosotrosRef}
                valoresRef={valoresRef}
                clientesRef={clientesRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
                {children }
            <Footer 
                nosotrosRef={nosotrosRef}
                valoresRef={valoresRef}
                clientesRef={clientesRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
        </>
    )
}
