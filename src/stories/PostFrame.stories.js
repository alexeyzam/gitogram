import PostFrame from "@/components/PostFrame";

export default {
    title:'MainPage/App/Content/subcomponents/PostFrame',
    component: PostFrame
}

export const Template = () => ({
    components: {PostFrame},
    template: '<PostFrame></PostFrame>'
})

Template.story={
    name:'DefaultView'
}
