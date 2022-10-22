import Stories from "@/components/Stories";

export default {
    title: 'MainPage/App/Header/Subcomponents/Stories',
    template: Stories,

}


const Template = (args) => ({
    components: {Stories},
    setup(){
        return {...args}
    },
    template: `
      <div class="stories">
      <Stories :repos="users"></Stories>
      </div>
    `,


})

export const TemplateBinded = Template.bind({})
TemplateBinded.args = {
    repos: [
        {
            stars: 10,
            forks: 300,
            username: 'Some user',
            name: 'Some repo',
            description: 'Some description',
            img: require.context('../assets/images', false, /\.jpg$/)('./Josh.jpg'),
        }
    ],
}

TemplateBinded.story = {
    name: 'Stories'
}
