import Sliders from "@/components/Sliders";
import Home from "@/components/Home";
import LoginPage from "@/components/Login/LoginPage";
import UserProfile from "@/components/User/UserProfile";
import UserRepositories from "@/components/User/UserRepositories";
import UserFollowing from "@/components/User/UserFollowingRepos";
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
    {
        path: "/user-profile",
        name:"user-profile",
        component: UserProfile,
        children:[
            {
                path:'user-own-repos',
                name:'user-own-repos',
                component:UserRepositories,
            },
            {
                path:'user-following',
                name:'user-following',
                component:UserFollowing,
            }
        ]
    },
]
