import Register from './module/auth/register'
import Login from './module/auth/login'
import MainTemplateUser from './module/user/main-template-user'
import MainLayoutAdmin from './module/admin/main/main-layout-admin'
// import IndexDashboard from "./components/admin/menu/dashboard/IndexDashboard";

const AdminRoutes = [
    // {path: "/not/found/page", name: "NotFoundPage", Component: NotFoundPage },
    {id: "default", path: "/admin", name: "Home Admin", Component: <MainLayoutAdmin />, type_menu: "menu" },
    {id: "home", path: "/home", name: "Home", Component: <MainTemplateUser />, type_menu: "menu" },
    {id: "admin", path: "/admin", name: "Admin", Component: <MainLayoutAdmin />, type_menu: "menu" },
    {id: "register", path: "/admin/register", name: "Register", Component: <Register />, type_menu: "menu" },
    {id: "login", path: "/admin/login", name: "Login", Component: <Login />, type_menu: "menu" },
];

export default AdminRoutes;
