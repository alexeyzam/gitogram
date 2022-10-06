import Content from "@/components/Content";
import PostFrame from "@/components/PostFrame";
export default {
    title:'MainPage/App/Content',
    component: Content,
    subcomponents:{PostFrame}
}

export const Template = () => ({
    components: {Content,PostFrame},
    template: `<Content>
    <template v-slot:postFrame>

      <PostFrame/>

    </template>
    </Content>`
})

Template.story={
    name:'Content',
}
