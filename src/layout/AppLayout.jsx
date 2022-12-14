import { NavBar, Footer } from '../components'

export const AppLayout = ({ children, nosotrosRef, serviciosRef, contactoRef }) => {
    return (
        <>
            <NavBar 
                nosotrosRef={nosotrosRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
                {children }
            <Footer 
                nosotrosRef={nosotrosRef}
                serviciosRef={serviciosRef}
                contactoRef={contactoRef}
            />
        </>
    )
}
