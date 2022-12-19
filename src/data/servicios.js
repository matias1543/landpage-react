import prensaImg from '../assets/imgs/services/service_prensa.png';
import opinionImg from '../assets/imgs/services/service-opinion.png';
import socialesImg from '../assets/imgs/services/service-sociales.png';
import estrategicoImg from '../assets/imgs/services/service-estrategico.png';
import institucionalesImg from '../assets/imgs/services/service-institucionales.png';
import coyunturaImg from '../assets/imgs/services/service-coyuntura.png';
import regulatorioImg from '../assets/imgs/services/service-regulatorio.png';

export const servicios = [
    {
        title: 'Estrategias de comunicación corporativa',
        type: [
            {
                title: 'Prensa',
                info: 'Armado de estrategias de comunicación y posicionamiento frente a la prensa. Construcción de vínculos con periodistas y medios de comunicación. Armado de campañas de promoción, y de estrategias para el manejo de datos e información. Creación de contenidos y unificación de mensajes clave.',
                position: 'right',
                img: prensaImg
            },
            {
                title: 'Formadores de opinión',
                info: 'Identificación, contacto y generación de vínculos con generadores de opinión relevantes en el área en cuestión.',
                position: 'left',
                img: opinionImg
            },
            {
                title: 'Redes sociales',
                info: ' Elaboración de una estrategia de redes sociales acorde al público objetivo, apuntando a generar credibilidad y ampliar la divulgación. Manejo de las redes sociales seleccionadas (Instagram, Twitter, Linkedin, etc), armado estratégico de campañas y elaboración de contenidos orientados a transmitir los mensajes clave.',
                position: 'right',
                img: socialesImg
            },
        ]
    },
    {
        title: 'Asuntos públicos',
        type: [
            {
                title: 'Asesoramiento estratégico',
                info: 'Mapeo de los actores relevantes en el área, identificación de stakeholders. Asesoramiento para la definición de políticas y procedimientos ante posibles escenarios. Seguimiento de la coyuntura y alerta temprana de movimientos relevantes. Asesoramiento para manejo de crisis.',
                position: 'left',
                img: estrategicoImg
            },
            {
                title: 'Relaciones institucionales',
                info: 'Generación de vínculos, mediación en negociaciones e impulsión de alianzas con stakeholders y actores estratégicos. Asesoramiento para manejar el vínculo entre sector privado y sector público.',
                position: 'right',
                img: institucionalesImg
            }
        ]
    },
    {
        title: 'Detección y prevención de riesgos',
        type: [
            {
                title: 'Informes de coyuntura',
                info: 'seguimiento de la coyuntura y alerta temprana de crisis o situaciones que pueden devenir en crisis.',
                position: 'right',
                img: coyunturaImg
            },
            {
                title: 'Análisis regulatorio',
                info: 'Implementación de metodología de análisis de impacto regulatorio para garantizar el margen de beneficios de nuestros clientes.',
                position: 'left',
                img: regulatorioImg
            }
        ]
    },
]