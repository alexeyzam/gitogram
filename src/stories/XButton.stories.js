import XButton from "@/components/XButton";

export default {
    title:'MainPage/App/Content/XButton',
    component: XButton,
    argTypes:{
        text:{
            control:{
                type: 'text'
            }
        },
        align:{
            options:['stretch','center','start','end'],
            control: {
                type: 'radio'

            }
        }
    }
}

const Template = (args) => ({
    components:{XButton},
    setup (){
        return { args }
    },
    template: `
      <div style="display: flex; flex-direction: row; justify-content: center; height: 100px">
    <XButton v-bind="args"></XButton>
    </div>`
})

export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    text: 'Follow',
    align:'center',
}

TemplateBinded.story={
    name:'XButton'
}

