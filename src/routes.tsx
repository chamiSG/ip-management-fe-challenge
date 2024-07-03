import ProtectedRoute from '@/layouts/ProtectedRoute';
import IPManage from '@/views/ip-manage';
import Audit from '@/views/audit';
import SignIn from '@/views/signin';
import SignUp from '@/views/signup';

const routes = [
  {
    path: "/",
    name: "Root",
    primary: true,
    element: <ProtectedRoute />,
    children: [
      {
        path: "ip-manage",
        name: "IP Manage",
        element: <IPManage />,
      },
      {
        path: "audit",
        name: "Audit",
        element: <Audit />,
      },
    ],
  },
  
  {
    path: "/sign-in",
    name: "Sign In",
    primary: false,
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    primary: false,
    element: <SignUp />,
  },
]

export default routes;
