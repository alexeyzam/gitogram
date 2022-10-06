import Toggler from "@/components/Toggler";

export default {
    title:'MainPage/App/Content/subcomponents/Toggler',
    component:Toggler
}

const Template = (args) =>({
    components:{Toggler},
    setup() {
        return { ...args };
    },
    template:`<Toggler v-model="isViewIssue"></Toggler>`
})

export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    isViewIssue: false,
}

TemplateBinded.story={
    name:'Toggler'
}
