import { NavBar, Footer } from '../components'

export const AppLayout = ({ children, nosotrosRef, clientesRef, serviciosRef, contactoRef }) => {
    return (
        <>
            <NavBar 
                nosotrosRef={nosotrosRef}
                clientesRef={clientesRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
                {children }
            <Footer 
                nosotrosRef={nosotrosRef}
                clientesRef={clientesRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
        </>
    )
}
