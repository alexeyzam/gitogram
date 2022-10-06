import Stories from "@/components/Stories";

export default {
    title: 'MainPage/App/Header/Subcomponents/Stories',
    template: Stories,
}


export  const Template = () => ({
    components: {Stories},
    template: `<div class="stories">
    <Stories></Stories>
    </div>
    `,
    story:{

    }


})
Template.story={
    name: 'Stories'
}
