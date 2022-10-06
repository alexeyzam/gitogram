import Logo from "@/components/Logo";

export default {
    title: 'Top/Header/Subcomponents/Logo',
    component: Logo,
}


const Template = (args) => ({
    components: {Logo},
    setup() {
        return { ...args };
    },
    template: '<Logo  :name="name"></Logo>',
});

export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    name: 'Gitogram'
}

TemplateBinded.story={
    name:'Logo'
}

