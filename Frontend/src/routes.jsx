import Dashboard from "./layouts/Rol/Docente/dashboard/main";
import Crear from "./layouts/Rol/Docente/crear/main";
import LoginForm from "./layouts/authentication/sign-in/main";
import Home from "./layouts/Rol/Docente/home/main";
import Docentes from "./layouts/Rol/Docente/docentes/main";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableView from '@mui/icons-material/TableView' ;
import ReceiptLong from '@mui/icons-material/ReceiptLong'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Notas from "./layouts/Rol/Docente/Notas/RegistrarNotas";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon fontSize="small"/>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Estudiante",
    key: "estudiante",
    icon: <AssignmentIndIcon fontSize="small"/>,
    children: [
      {
        type: "item",
        name: "Crear",
        key: "crear-estudiante",
        route: "/estudiante1",
        parentKey: "estudiante",
        component: <Docentes />,
      },
      {
        type: "item",
        name: "Lista",
        key: "lista-estudiante",
        route: "/estudiante2",
        parentKey: "estudiante",
        component: <Crear />,
      },
    ]
  },
  {
    type: "collapse",
    name: "Registrar Notas",
    key: "notas",
    icon: <TableView fontSize="small"/>,
    route: "/notas",
    component: <Notas />,
  },
  {
    type: "collapse",
    name: "Signin",
    key: "signin",
    icon: <ReceiptLong fontSize="small"/>,
    route: "/signin",
    component: <LoginForm />,
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <HomeIcon fontSize="small"/>,
    route: "/home",
    component: <Home />,
    
  },

  
];

export default routes;
