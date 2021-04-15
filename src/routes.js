import Video from './components/Video';
import Cuidado from './pages/AutoCuidado';
import Afectiva from './pages/AutoCuidado/Afectiva';
import Corporal from './pages/AutoCuidado/Corporal';
import Mental from './pages/AutoCuidado/Mental';
import Bienestar from './pages/Bienestar';
import Clases from './pages/Bienestar/Clases';
import Salud from './pages/Bienestar/Salud';
import Servicios from './pages/Bienestar/Servicios';
import Digital from './pages/Digital';
import Whats from './pages/Digital/WhatsApp';
import Zoom from './pages/Digital/Zoom';
import Home from './pages/Home';
import Login from './pages/Login';
import Preguntas from './pages/Preguntas';
import Profile from './pages/Profile';
import Store from './pages/Store';
import Progress from './pages/Progress';
import Habitos from './pages/Progreso/Habitos';
import CuidadoPersonal from './pages/Progreso/CuidadoPersonal';
import BienestarSaludable from './pages/Progreso/BienestarSaludable';
import CuidadosMedicos from './pages/Progreso/CuidadosMedicos';

const routes = [
  { exact: true,
    path: '/',
    component: Login,
  },
  { exact: true,
    path: '/inicio',
    component: Home,
  },
  { exact: true,
    path: '/preguntas',
    component: Preguntas,
  },
  { exact: true,
    path: '/profile',
    component: Profile,
  },
  { exact: true,
    path: '/nivelacion-digital',
    component: Digital,
  },
  { exact: true,
    path: '/nivelacion-digital/whatsapp',
    component: Whats,
  },
  { exact: true,
    path: '/nivelacion-digital/zoom',
    component: Zoom,
  },
  { exact: true,
    path: '/nivelacion-digital/:rutaId/:videoId/:userVideo/:stopped_at/:focusId',
    component: Video,
  },
  { exact: true,
    path: '/auto-cuidado',
    component: Cuidado,
  },
  { exact: true,
    path: '/auto-cuidado/corporal',
    component: Corporal,
  },
  { exact: true,
    path: '/auto-cuidado/mental',
    component: Mental,
  },
  { exact: true,
    path: '/auto-cuidado/afectiva',
    component: Afectiva,
  },
  { exact: true,
    path: '/bienestar',
    component: Bienestar,
  },
  { exact: true,
    path: '/bienestar/servicios-salud',
    component: Salud,
  },
  { exact: true,
    path: '/bienestar/servicios',
    component: Servicios,
  },
  { exact: true,
    path: '/bienestar/servicios/clases',
    component: Clases,
  },
  { exact: true,
    path: '/bienestar/servicios/tienda',
    component: Store,
  },
  { exact: true,
    path: '/progreso',
    component: Progress,
  },
  { exact: true,
    path: '/progreso/habitos',
    component: Habitos,
  },
  { exact: true,
    path: '/progreso/cuidadopersonal',
    component: CuidadoPersonal,
  },
  { exact: true,
    path: '/progreso/bienestarsaludable',
    component: BienestarSaludable,
  },
  { exact: true,
    path: '/progreso/cuidadosmedicos',
    component: CuidadosMedicos,
  },
];

export default routes;
