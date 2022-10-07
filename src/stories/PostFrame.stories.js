import PostFrame from "@/components/PostFrame";

export default {
    title: 'MainPage/App/Content/subcomponents/PostFrame',
    component: PostFrame,
    argTypes: {
        user: {
            control: 'object'
        }
    }
}

const Template = (args) => ({
    components: {PostFrame},
    setup(){
        return {args}
    },
    template: `<PostFrame v-bind="args"></PostFrame>`
})



export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    user:{
        stars:10,
        forks:300,
        name:'Some user',
        description:'Some description'
    },
}

TemplateBinded.story={
    name:'DefaultView'
}

