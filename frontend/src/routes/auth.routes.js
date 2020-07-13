import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const routes = [
  {
    component: Login,
    path: "/login",
    layout: "/auth",
  },
  {
    component: SignUp,
    path: "/signUp",
    layout: "/auth",
  },
];

export default routes;
