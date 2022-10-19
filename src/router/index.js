import {createRouter,createWebHashHistory} from "vue-router";
import routes from "./routes"
import store from "@/store";

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach(async (to, from, next) => {
    await store.dispatch('user/dispatchGetUser')
    if (to.name === 'login' && store.state.user.isLoggedIn !== true) {
        return next()
    }

    if (store.state.user.isLoggedIn !== true) {
        return next({name: 'login'})

    }

    return next()

})
export default router
