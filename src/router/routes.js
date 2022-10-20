import Sliders from "@/components/Sliders";
import Home from "@/components/Home";
import LoginPage from "@/components/Login/LoginPage";
export default [

    {
        path: "/stories",
        name:'stories',
        component:Sliders,
    },
    {
        path: "/login",
        name:'login',
        component: LoginPage,
    },
    {
        path: "/",
        name:'home',
        component:Home,
    },
]
