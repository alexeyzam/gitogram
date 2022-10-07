import Content from "@/components/Content";
import PostFrame from "@/components/PostFrame";
export default {
    title:'MainPage/App/Content',
    component: Content,
    subcomponents:{PostFrame}
}

const Template = (args) => ({
    components: {Content,PostFrame},
    setup(){
        return {args}
    },
    template: `<Content v-bind="args">
    <template v-slot:postFrame>

      <PostFrame v-bind="args"/>

    </template>
    </Content>`
})


export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    user:{
        stars:10,
        forks:300,
        username:'Some user',
        name:'Some repo',
        description:'Some description',
        img:'',
    },
}

TemplateBinded.story={
    name:'Content'
}
