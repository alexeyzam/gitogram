import Sliders from "@/components/Sliders";
import Home from "@/components/Home";
import LoginPage from "@/components/Login/LoginPage";
export default [
    {
        path: "/",
        name:'home',
        component:Home,
    },
    {
        path: "/stories",
        name:'stories',
        component:Sliders,
    },
    {
        path: "/login",
        name:'login',
        component: LoginPage,
    }
]
