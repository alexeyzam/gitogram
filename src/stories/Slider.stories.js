import Slider from "@/components/Slider";
import {store} from "@/stories/store";
import vueRouter from 'storybook-vue3-router'
import {app} from "@storybook/vue3";
import Home from "@/components/Home";

app.use(store())



export default {
    title: 'MainPage/App/Content/Slider',
    component: Slider,
}

export const Template = (args) => ({
    components:{Slider},
    setup() {

        return { ...args };
    },
    template: '<Slider :data="data" :index="index" style="left: 0px;margin-top:70px"></Slider>',

})
Template.args={
    data: {
        id:1,
        stars: 10,
        forks: 300,
        username: 'Some user',
        name: 'Some repo',
        description: 'Some description',
        img: require.context('../assets/images', false, /\.jpg$/)('./Josh.jpg'),
    },
    index:1,
}
Template.decorators = [
    vueRouter([

        {
            path: "/",
            name:'home',
            component:Home,
        },
    ],{
            initialRoute:'stories?id=1'
        }

        )
]

Template.story={
    name:'Slider'
}
