import Slider from "@/components/Slider";

export default {
    title: 'MainPage/App/Content/Slider',
    component: Slider,
}

export const Template = () => ({
    components:{Slider},
    template: '<Slider></Slider>'
})
Template.story={
    name:'Slider'
}
