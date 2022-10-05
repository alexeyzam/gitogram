import AppBar from "@/components/AppBar";

export default {
    title: 'Header/AppBar',
    component: AppBar,
}


const Template = (args) => ({
    components: {AppBar},
    setup() {
        return { ...args };
    },
    template: '<AppBar :height="height"></AppBar>',
});



export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    height: 40
}

TemplateBinded.story={
    name:'AppBar'
}





