import Register from './module/auth/register'
import Login from './module/auth/login'
import MainTemplateUser from './module/user/main-template-user'
import MainLayoutAdmin from './module/admin/main/main-layout-admin'
// import IndexDashboard from "./components/admin/menu/dashboard/IndexDashboard";

const routes = [
    // {path: "/not/found/page", name: "NotFoundPage", Component: NotFoundPage },
    {id: "default", path: "/", name: "Home", Component: <MainTemplateUser />, type_menu: "menu" },
    {id: "home", path: "/home", name: "Home", Component: <MainTemplateUser />, type_menu: "menu" },
    {id: "admin", path: "/admin", name: "Admin", Component: <MainLayoutAdmin />, type_menu: "menu" },
    {id: "register", path: "/register", name: "Register", Component: <Register />, type_menu: "menu" },
    {id: "login", path: "/login", name: "Login", Component: <Login />, type_menu: "menu" },
];

export default routes;
