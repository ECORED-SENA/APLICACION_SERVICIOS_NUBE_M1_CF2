export const global = {
  componenteFormativo: 'La fase de elicitación de requisitos',
  descripcionCurso:
    'En este componente formativo se abordan los saberes de ingeniería de requisitos: ciclo de vida del software fases y objetivos, modelos, características, caracterización de la fase de definición de requisitos y herramientas para el uso de captura de requisitos que se usan para el desarrollo del software.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Elicitación de requisitos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Planeación',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Técnicas e instrumentos para elicitar requisitos',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Herramientas para captura de requisitos',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Herramientas de modelado',
          hash: 't_1_4',
        },
      ],
    },
  ],
  subMenu: [
    {
      nombreRuta: 'actividad',
      icono: 'far fa-question-circle',
      titulo: 'Actividad didáctica',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro industrial del diseño y la manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: [
        'Henry Eduardo Bastidas Paruma',
        'Jonathan Guerrero Astaiza',
        'Peter Emerson Pinchao Solis',
        'Zulema Yidney León Escobar',
      ],
      cargo: 'Experto temático',
      centro: 'Centro de teleinformática y producción industrial',
      regional: 'Regional Cauca',
    },
    {
      nombre: ['Alix Cecilia Chinchilla Rueda', 'Oscar Absalón Guevara'],
      cargo: 'Diseñador instruccional',
      centro: 'Centro de gestión industrial',
      regional: 'Regional Bogotá',
    },
    {
      nombre: ['José Gabriel Ortiz Abella', 'Julia Isabel Roberto'],
      cargo: 'Evaluador instruccional',
      centro: 'Centro para la industria y la comunicación gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Ana Catalina Córdoba Sus',
      cargo: 'Revisión metodológica y pedagógica',
      centro: 'Centro para la industria de la comunicación gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro industrial del diseño Y la manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'José Jaime Luis Tang Pinzón',
        'Juan Daniel Polanco Muñoz',
        'Nelson Iván Vera Briceño',
        'Wilson Andres Arenales Cáceres',
        'Yuly Andrea Rey Quiñonez',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: ['Lizeth Karina Manchego Suarez', 'Luis Gabriel Urueta Alvarez'],
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro industrial del diseño y la manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Jhon Jairo Urueta Alvarez',
      cargo: 'Desarrollo Front-End',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: ['Milady Tatiana Villamil Castellanos'],
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Baar, B. (2006). Using Stakeholder Analysis in Software Project Management. Universidad de Amsterdam.',
  },
  {
    referencia:
      'Braude, J. (2003). Ingeniería de software, una perspectiva orientada a objetos. Alfaomega.',
  },
  {
    referencia:
      'Cohen, L. (2011). Métodos de investigación educativa. La Muralla.',
  },
  {
    referencia:
      'Cohn, M. (2004). User Stories Applied for Agile Software Development. Pearson Education, Inc.',
  },
  {
    referencia:
      'Cox, K., Niazi, M., y Verner, J. (2009). Empirical study of Sommerville and Sawyer’s requirements engineering practices. IET Software, 3(5), 339.',
    link: 'https://doi.org/10.1049/iet-sen.2008.0076',
  },
  {
    referencia: 'Curso de interacción persona-ordenador. (2021). Storyboarding',
    link: 'https://mpiua.invid.udl.cat/storyboarding',
  },
  {
    referencia:
      'Denscombe, M. (2010). The Good Research Guide. McGraw-Hill Education.',
  },
  {
    referencia:
      'Dornyei, Z. (2010). Questionnaires in Second Language Research: Construction, Administration, and Processing. Routledge.',
  },
  {
    referencia:
      'Durán, A., Bernárdez, B., Ruiz, A. y Toro, M. (1999). A Requirements Elicitatio Approach Based in Templates and Patterns.',
    link:
      'https://www.researchgate.net/publication/2890318_A_Requirements_Elicitation_Approach_Based_in_Templates_and_Patterns',
  },
  {
    referencia:
      'Gause, C., & Weinberg, G. M. (1989). Exploring Requirements: Quality Before Design. Dorset House.',
  },
  {
    referencia:
      'Granollers, T., Lorés, J., y Perdrix F. (2002). Prototipado. Capítulo 5: modelo de proceso de la ingeniería de la usabilidad y de la accesibilidad.',
    link: 'https://docplayer.es/13733635-5-6-1-',
  },
  {
    referencia:
      'Gutiérrez, J. (s.f.). Diagramas UML de casos de uso y de requisitos.',
    link:
      'http://www.lsi.us.es/~javierj/cursos_ficheros/metricaUML/CasosUsoUML.pdf',
  },
  {
    referencia:
      'Hernández, S., Fernández C., y Baptista L. (2006). Metodología de la investigación. McGraw Hill.',
  },
  {
    referencia:
      'Herrera J., Lizka J. (2003). Ingeniería de requerimientos, ingeniería de software.',
    link: 'http://www.monografias.com/trabajos6/resof/resof.shtml',
  },
  {
    referencia:
      'La oficina de proyectos de informática (2012). PMOinformatica.com.',
    link:
      'http://www.pmoinformatica.com/2012/10/plantillas-scrum-historias-de-usuario.html',
  },
  {
    referencia:
      'Piattini M., Calvo-Manzano J., Cervera J., y Fernández, L. (2004). Análisis y diseño de aplicaciones informáticas de gestión. Una perspectiva de ingeniería de software. Alfaomega-Rama.',
  },
  {
    referencia:
      'Sommerville, I. (2011). Ingeniería de software. Pearson Educación.',
  },
  {
    referencia:
      'Ventura, M. T. (2002). La ingeniería de requerimientos como factor clave para el éxito de los proyectos de desarrollo de software.',
    link: 'http://132.248.9.195/ppt2002/0307178/Index.html',
  },
  {
    referencia:
      'Wessinger, K., (2012) Project Stakeholder Management. Engineering Management Journal, 14(84), 19-24.',
  },
]

export const glosario = [
  {
    termino: 'Ciclo de vida software',
    significado:
      'se refiere a la aplicación de metodologías para el desarrollo del sistema software (AECC, 1986).',
  },
  {
    termino: 'Método',
    significado:
      'indica cómo construir técnicamente el software. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
  },
  {
    termino: 'Metodología',
    significado: 'colección de métodos para resolver un tipo de problemas.',
  },
  {
    termino: 'Ágil',
    significado:
      'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
  },
  {
    termino: 'Requerimiento',
    significado:
      'el requerimiento se refiere a la petición que se hace de algo que se solicita.',
  },
  {
    termino: 'Requisito',
    significado:
      'es la condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
  },
  {
    termino: 'Stakeholders',
    significado:
      'individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas (ISO 29148).',
  },
]

export const complementario = [
  {
    texto: 'Entradas, herramientas y salidas.',
    tipo: 'Página web',
    link: 'https://todopmp.com/cards/',
  },
  {
    texto: 'Matriz stakeholders',
    tipo: 'Video 1',
    link: 'https://www.youtube.com/watch?v=aUkTxgaajBo',
  },
  {
    texto: 'Matriz stakeholders',
    tipo: 'Video 2',
    link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
  },
  {
    texto: 'Matriz stakeholders',
    tipo: 'Video 3',
    link: 'https://www.youtube.com/watch?v=hDZ0uu0H1wc',
  },
  {
    texto: 'Ejemplos de entrevistas',
    tipo: 'Video',
    link: 'https://www.youtube.com/watch?v=mwnQuUi9014',
  },
]
