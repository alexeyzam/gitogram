import App from "@/App";

export default {
    title:'MainPage/App',
    components:App
}

export const Temlate = () => ({
    components: {App},
    template:'<App></App>'
})

Temlate.story={
    name:'App'
}
