import Dashboard from "./layouts/dashboard/main";
import Crear from "./layouts/crear/main";
import LoginForm from "./layouts/authentication/sign-in/main";
import Home from "./layouts/home/main";
import Docentes from "./layouts/docentes/main";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableView from '@mui/icons-material/TableView' ;
import ReceiptLong from '@mui/icons-material/ReceiptLong'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


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
    name: "Crear",
    key: "crear",
    icon: <TableView fontSize="small"/>,
    route: "/crear",
    component: <Crear />,
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
  {
    type: "collapse",
    name: "Docente",
    key: "docente",
    icon: <AssignmentIndIcon fontSize="small"/>,
    route: "/docente",
    component: <Docentes />,
  },
  
];

export default routes;
