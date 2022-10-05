import AppBar from "@/components/AppBar";

export default {
    // title: 'AppBar',
    component: AppBar,
}


export const Template = (args) => ({
    components: {AppBar},
    // Then, the spread values can be accessed directly in the template
    template: '<AppBar></AppBar>',
});

