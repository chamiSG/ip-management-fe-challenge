import Home from '@/views/home';
import IPManage from '@/views/ip-manage';
import Audit from '@/views/audit';

const routes = [
  {
    path: "/",
    name: "Home",
    primary: true,
    element: <Home />,
  },
  {
    path: "/ip-manage",
    name: "IP Manage",
    primary: true,
    element: <IPManage />,
  },
  {
    path: "/audit",
    name: "Audit",
    primary: true,
    element: <Audit />,
  },
  {
    path: "/signin",
    name: "Sign In",
    primary: false,
    element: <Home />,
  },
  {
    path: "/signup",
    name: "Sign Up",
    primary: false,
    element: <Home />,
  },
]

export default routes;
