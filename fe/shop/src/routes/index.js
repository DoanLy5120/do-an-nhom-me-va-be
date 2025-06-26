import { DefaultLayout, EmptyLayout } from "../layouts";
import HomePage from "../page/public/HomePage";
import Info from "../page/customer/Info";
import Login from "../page/public/loginPage"
import Register from "../page/public/registerPage";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/login", component: Login, layout: EmptyLayout, publicOnly: true },
  {path: "/register", component: Register, layout: EmptyLayout, publicOnly: true }
];

const privateRoutes = [
    {path: "/info", component: Info, layout: EmptyLayout}
];

export { publicRoutes, privateRoutes };
