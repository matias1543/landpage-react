import React from 'react'
import { AppLayout } from './layout/AppLayout';
import { Nosotros, Valores, Bloque, Testimonios, Servicios, Contacto } from './screens';

const App = () => {
    return (
        <AppLayout>
          <Nosotros />
          <Valores />
          <Bloque />
          <Testimonios />
          <Servicios />
          <Contacto />
        </AppLayout>
    )
}

export default App;