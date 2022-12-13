import React, { useRef } from 'react'
import { AppLayout } from './layout/AppLayout';
import { Nosotros, Valores, Testimonioss, Servicioss, Contacto /*Bloque, Testimonios, Servicios  */ } from './screens';

const App = () => {
  // Scroll
  const nosotrosRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);

  return (
      <AppLayout 
        nosotrosRef={nosotrosRef}
        serviciosRef={serviciosRef}
        contactoRef={contactoRef}
      >
        <Nosotros ref={nosotrosRef} />
        <Valores />
        <Testimonioss />
        <Servicioss ref={serviciosRef} />
        {/* <Bloque /> */}
        {/* <Testimonios /> */}
        {/* <Servicios  ref={serviciosRef}/> */}
        <Contacto ref={contactoRef} />
      </AppLayout>
  )
}

export default App;