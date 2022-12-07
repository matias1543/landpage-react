import { NavBar, Footer } from '../components'

export const AppLayout = ({ children }) => {
    return (
        <>
            <NavBar />
                {children }
            <Footer />
        </>
    )
}
