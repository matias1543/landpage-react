import React, { useRef } from 'react'
import { AppLayout } from './layout/AppLayout';
import { Nosotros, Valores, Clientes, Servicios, Contacto } from './screens';

const App = () => {
  // Scroll
  const nosotrosRef = useRef(null);
  const valoresRef = useRef(null);
  const clientesRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);

  return (
      <AppLayout 
        nosotrosRef={nosotrosRef}
        valoresRef={valoresRef}
        serviciosRef={serviciosRef}
        contactoRef={contactoRef}
        clientesRef={clientesRef}
      >
        <Nosotros ref={nosotrosRef} />
        <Valores ref={valoresRef} />
        <Clientes ref={clientesRef} />
        <Servicios ref={serviciosRef} />
        <Contacto ref={contactoRef} />
      </AppLayout>
  )
}

export default App;