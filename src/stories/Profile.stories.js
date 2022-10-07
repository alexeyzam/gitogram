import Profile from "@/components/Profile";

export default {
    title:'MainPage/App/Components/Profile',
    component: Profile,
}

const Template = (args) =>({
    components:{Profile},
    setup(){
        return {...args}
    },
    template:`<Profile :username="username"></Profile>`
})

export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    username:'Josh'
}

TemplateBinded.story={
    name:'Profile'
}
