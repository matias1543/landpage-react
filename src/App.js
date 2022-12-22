import React, { useRef, useState, useEffect } from 'react'
import { AppLayout } from './layout/AppLayout';
import { Nosotros, Valores, Clientes, Servicios, Contacto } from './screens';

const App = () => {
  // Scroll
  const nosotrosRef = useRef(null);
  const valoresRef = useRef(null);
  const clientesRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);
    
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
  
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, [])

  return (
      <AppLayout 
        nosotrosRef={nosotrosRef}
        valoresRef={valoresRef}
        serviciosRef={serviciosRef}
        contactoRef={contactoRef}
        clientesRef={clientesRef}
      >
        <Nosotros ref={nosotrosRef} width={width} />
        <Valores ref={valoresRef} />
        <Clientes ref={clientesRef} width={width} />
        <Servicios ref={serviciosRef} />
        <Contacto ref={contactoRef} />
      </AppLayout>
  )
}

export default App;